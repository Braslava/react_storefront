import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_green.svg";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import CartIcon from "../../assets/cart_empty.svg";
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__nav-items-wrapper">
                    <a href="#" className="header__nav-link">
                        All
                    </a>
                    <a href="#" className="header__nav-link">
                        Clothes
                    </a>
                    <a href="#" className="header__nav-link">
                        Tech
                    </a>
                </div>
                <img src={logo} alt="logo" className="header__logo" />
                <div className="header__nav-items-wrapper">
                    <CurrencySelector />
                    <button className="header__cart-btn"><img src={CartIcon} alt="Show cart" className="cart-icon" /></button>
                </div>
            </div>
        );
    }
}

export default Header;
