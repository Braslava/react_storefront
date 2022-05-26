import React, { Component } from "react";
import "./ProductCard.css";
import {Link } from "react-router-dom";


class ProductCard extends Component {
    render() {
        const { id, name, gallery, prices, brand, inStock } =
            this.props.product;
        return (
            <Link to={id} className="text-link">
                <div className="product-card" key={id}>
                    <img
                        src={gallery[0]}
                        width={240}
                        alt=""
                        className="product-card__img"
                    />
                    <h2 className="product-card__title">{brand} {name}</h2>
                    <p className="product-card__price">{prices[0].currency.symbol} {prices[0].amount}</p>
                </div>
            </Link>
        );
    }
}

export default ProductCard;
