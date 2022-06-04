import React, { Component } from "react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getSingleProductQuery } from "../../queries";
import withRouter from "../../WithRouter";
import "./ProductPage.css";
import Loader from "../../components/Loader/Loader";
import Carousel from "../../components/Carousel/Carousel";
import TextAttributePicker from "../../components/TextAttributePicker/TextAttributePicker";
import ColorPicker from "../../components/ColorPicker/ColorPicker";

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product,
           // selectedAttributes: [],
            error: null,
        };
    }
    handleAddToCart = () => {
        console.log("added");
        console.log(this.props);
    };

    onChangeValue = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        // const attrributeToSet = e.targe.name;
    
    };

    render() {
        const { loading, product } = this.props.data;
        console.log(this.state);
        // const { product } = this.props.data;
        return (
            <main className="product-page">
                {loading && <Loader />}
                {!loading && (
                    <div className="product-page__container">
                        <Carousel
                            images={product.gallery}
                            name={product.name}
                        />

                        <div className="product-page__info">
                            <h1 className="product-page__heading">
                                {product.brand}{" "}
                                <p className="product-page__product-title">
                                    {product.name}
                                </p>
                            </h1>
                            {product.attributes.map((attribute) => {
                                return attribute.id === "Color" ? (
                                    <ColorPicker
                                        key={attribute.id}
                                        colors={attribute.items}
                                        type={attribute.id}
                                        selectedProduct={
                                            this.state.slectedProduct
                                        }
                                        onChangeValue={this.onChangeValue}
                                    />
                                ) : (
                                    <TextAttributePicker
                                        key={attribute.id}
                                        attributes={attribute.items}
                                        type={attribute.id}
                                        selectedProduct={
                                            this.state.slectedProduct
                                        }
                                        onChangeValue={this.onChangeValue}
                                    />
                                );
                            })}
                            <p className="product-page__small-title">Price:</p>
                            <button onClick={() => this.handleAddToCart()}>
                                Add to cart
                            </button>
                            <p
                                className="product-page__description"
                                dangerouslySetInnerHTML={{
                                    __html: `${product.description}`,
                                }}
                            ></p>
                        </div>
                    </div>
                )}
            </main>
        );
    }
}

export default withRouter(
    graphql(getSingleProductQuery, {
        options: (ownProps) => ({
            variables: {
                id: ownProps.router.params.productId,
            },
        }),
    })(ProductPage)
);
