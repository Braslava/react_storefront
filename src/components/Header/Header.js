import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import { graphql } from "@apollo/client/react/hoc";
import { getCategoriesQuery } from "../../queries";

import logo from "../../assets/logo_green.svg";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import CartIcon from "../../assets/cart_empty.svg";
import "./Header.css";

class Header extends Component {
    render() {
        const { categories, loading } = this.props.data;
       // console.log(this.props.data);
        if (loading) return;

        return (
            <div className="header">
                <div className="header__nav-items-wrapper">
                    {categories.map((category) => {
                        return (
                            <NavLink
                                className="header__nav-link"
                                to={category.name}
                                key={category.name}
                            >
                                {category.name}
                            </NavLink>
                        );
                    })}
                </div>
                <img src={logo} alt="logo" className="header__logo" />
                <div className="header__nav-items-wrapper">
                    <CurrencySelector />
                    <button className="header__cart-btn">
                        <img
                            src={CartIcon}
                            alt="Show cart"
                            className="cart-icon"
                        />
                    </button>
                </div>
            </div>
        );
    }
}

export default graphql(getCategoriesQuery)(Header);
