import React from "react";
import FlipMove from "react-flip-move";
import "./Checkout.css";
import CheckoutItem from "./CheckoutItem";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout_ad"
        />
        <div>
          <h3 className="checkout__titleName">{user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket :</h2>
        </div>
        {!basket.length && (
          <h3 className="checkout__titleName">Shopping Basket is empty...</h3>
        )}
        <FlipMove typeName={null}>
          {basket.map((item) => (
            <CheckoutItem
              id={item.id}
              title={item.title}
              img={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </FlipMove>
      </div>

      <div className="checkout__right">
        {user ? <Subtotal /> : <h4>You must be logged in to make purchases</h4>}
      </div>
    </div>
  );
}

export default Checkout;
