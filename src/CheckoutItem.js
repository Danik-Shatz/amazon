import React, { forwardRef } from "react";
import "./CheckoutItem.css";
import { useStateValue } from "./StateProvider";
import StarIcon from "@material-ui/icons/Star";

const CheckoutItem = forwardRef(
  ({ title, img, price, rating, id, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };
    return (
      <div className="checkoutItem" ref={ref}>
        <img src={img} alt="" />
        <div className="checkoutItem__info">
          <p className="checkoutItem__title">{title}</p>
          <p className="checkoutItem__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutItem__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon />
              ))}
          </div>
          {!hideButton && (
            <button className="checkoutItem__button" onClick={removeFromBasket}>
              Remove from Basket
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutItem;
