import React, { Component } from "react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

import "./ProductPage.css";
import Loader from "../../components/Loader/Loader";
import Carousel from "../../components/Carousel/Carousel";

const getSingleProductQuery = gql`
    query {
        product(id: "ps-5") {
            id
            name
            inStock
            gallery
            description
            category
            attributes {
                id
                items {
                    displayValue
                    id
                }
            }
            prices {
                currency {
                    label
                    symbol
                }
                amount
            }
            brand
        }
    }
`;

class ProductPage extends Component {
    // displayProduct = () => {
    //     console.log(this.props.data);
    //     const { loading } = this.props.data;
    //     if (loading) {
    //         //console.log("loading...")
    //         return <Loader />;
    //     } else {
    //             return (
    //                 <ProductCard product={product} key={product.id}/>
    //             );

    //     }
    // }

    render() {
       const { loading } = this.props.data;
       console.log(this.props.data);
       const { product } = this.props.data;

        return (
            <main className="product-page">
                {loading && <Loader />}
               {!loading &&  
                    <div className="product-page__container"> 
                    <Carousel images={product.gallery} name={product.name}/>
                   
                    <div className="product-page__info">
                            <p>{product.brand}</p>
                            <p>{product.name}</p>
                        </div>
                </div>}
            </main> 
        );
    }
}

export default graphql(getSingleProductQuery)(ProductPage);
