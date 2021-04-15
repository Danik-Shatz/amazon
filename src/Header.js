import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Tooltip from "@material-ui/core/Tooltip";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <Tooltip title="Go to the Home Page" placement="bottom">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Tooltip>
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search in Amazon store..."
        />
        <Tooltip title="Search in the store" placement="bottom">
          <SearchIcon className="header__searchIcon" />
        </Tooltip>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello, {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/about">
          <div className="header__option">
            <span className="header__optionLineOne">About</span>
            <span className="header__optionLineTwo">App & Author</span>
          </div>
        </Link>
        <Link to="/checkout">
          <Tooltip title="Open Basket" placement="bottom">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Tooltip>
        </Link>
      </div>
    </div>
  );
}

export default Header;
