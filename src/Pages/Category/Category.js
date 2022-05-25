import { Component } from "react";
//import logo from "../../assets/green_logo.png";
import { graphql } from "@apollo/client/react/hoc";
import { withRouter } from "react-router";
import { getProductsQuery } from "../../query";
import "./Category.css";

import Loader from "../../components/Loader/Loader";

class Category extends Component {
    displayProducts() {
        console.log(this.props.data);
        const { loading } = this.props.data;
        if (loading) {
            //console.log("loading...")
            return <Loader />;
        } else {
            return this.props.data.category.products.map((product) => {
                return (
                    <div className="product-card" key={product.id}>
                        <h2>{product.name}</h2>
                        <img src={product.gallery[0]}  width={240} alt="" />
                    </div>
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
