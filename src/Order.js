import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutItem from "./CheckoutItem";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  console.log(order.data.amount);
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutItem
          id={item.id}
          title={item.title}
          img={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>{`Subtotal: (${order.data.basket.length} items) - ${value}$`}</p>
          </>
        )}
        decimalScale={3}
        value={order.data.amount}
        displayType={"text"}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
