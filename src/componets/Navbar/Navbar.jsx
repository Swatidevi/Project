import React, { useState, useContext } from "react";
import logo from "../../assets/food-del-assets/assets/frontend_assets/logo.png";
import search_icon from "../../assets/food-del-assets/assets/frontend_assets/search_icon.png";
import basket_icon from "../../assets/food-del-assets/assets/frontend_assets/basket_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

  // ✅ context access
  const { getTotalAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>

        {/* 🔥 yaha change kiya: Contact Us ab /order page kholega */}
        <Link
          to="/order"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </Link>
      </ul>

      <div className="navbar-right">
        <img src={search_icon} alt="Search icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={basket_icon} alt="Basket" />
          </Link>
          {/* ✅ dot tabhi dikhega jab cart me items ho */}
          <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
