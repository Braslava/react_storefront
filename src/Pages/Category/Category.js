import { Component } from "react";
//import logo from "../../assets/green_logo.png";
import { graphql } from "@apollo/client/react/hoc";
import { withRouter } from "react-router";
import { getProductsQuery } from "../../query";
import "./Category.css";
import ProductCard from "../../components/ProductCard/ProductCard";

import Loader from "../../components/Loader/Loader";

class Category extends Component {
    displayProducts = () => {
        //console.log(this.props.data);
        const { loading } = this.props.data;
        if (loading) {
            //console.log("loading...")
            return <Loader />;
        } else {
            return this.props.data.category.products.map((product) => {
                return (
                    <ProductCard product={product} key={product.id}/>
                );
            });
        }
    }
    render() {
        return (
            <main className="category">
                <h1>All</h1>
                <div className="category__product-grid">
                    {this.displayProducts()}
                </div>
            </main>
        );
    }
}

export default graphql(getProductsQuery)(Category);
//export default Category;
