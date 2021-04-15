import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  let totalNum = 0;
  basket.forEach((item) => {
    return (totalNum += parseFloat(item.price));
  });
  basket.forEach((item) => console.log(item));

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(totalNum) => (
          <>
            <p>
              {basket.length
                ? `Subtotal: (${basket.length} items) : ${totalNum}`
                : "There is no items in your Basket "}
              {/* :<strong>{totalNum}</strong> */}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalNum}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
