import { Component } from "react";
//import logo from "../../assets/green_logo.png";
import { graphql } from "@apollo/client/react/hoc";

import { gql } from "@apollo/client";

const getCategoriesQuery = gql`
    query {
        categories {
            name
        }
    }
`;

class Category extends Component {
    render() {
        console.log(this.props);
        return (
            <main className="category">
                <h1>Categories</h1>
            </main>
        );
    }
}

export default graphql(getCategoriesQuery)(Category);
//export default Category;
