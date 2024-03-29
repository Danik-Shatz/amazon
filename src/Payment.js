import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutItem from "./CheckoutItem";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db } from "./firebase";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `./payments/create?total=${totalNum * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS =>>>", clientSecret);

  let totalNum = 0;
  basket.forEach((item) => {
    return (totalNum += parseFloat(item.price));
  });
  basket.forEach((item) => console.log(item));

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff :3
    event.preventDefault();
    setProcessing(true);

    const payLoad = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // PaymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
    // const payLoad = avait stripe
  };
  const handleChange = (event) => {
    //Listen for changes in the CardElement
    // and display any errors as the customers types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to="/checkout">
            {basket?.length} {basket?.length == 1 ? "item" : "items"}
          </Link>
          )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3 className="">Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>email: {user?.email}</p>
            <p>Central Asia</p>
            <p>Almaty, Kasachstan</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3 className="">Review items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutItem
                id={item.id}
                title={item.title}
                img={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3 className="">Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(totalNum) => (
                    <>
                      <p>
                        {basket.length
                          ? `Subtotal: (${basket.length} items) : ${totalNum}`
                          : "There is no items in your Basket "}
                        {/* :<strong>{totalNum}</strong> */}
                      </p>
                      {/* <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                      </small> */}
                    </>
                  )}
                  decimalScale={2}
                  value={totalNum}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
