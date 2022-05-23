import { Component } from "react";
import "./global_styles/App.css";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { Routes, Route, Link } from "react-router-dom";
import { getCategoriesQuery } from "./query";
import { graphql } from "@apollo/client/react/hoc";

class App extends Component {
    render() {
        const data = this.props.data;
        console.log(data);

        const createRoutes = () => {
            return data.categories.map((category) => {
                return <Route path={category.name} element={<Category category={category.name}/>} />;
            });
        };
        return (
            <div className="App">
                <Header />
                <Routes>
                <Route path={"/"} element={<Category/>} />
                    {this.createRoutes}
                    <Route path="cart" element={<Cart />} />
                </Routes>
                {/* <Category /> */}
            </div>
        );
    }
}

export default graphql(getCategoriesQuery)(App);
