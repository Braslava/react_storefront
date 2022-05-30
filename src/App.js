import { Component } from "react";
import "./global_styles/App.css";
import Category from "./Pages/Category/Category";
import Header from "./components/Header/Header";
import Cart from "./Pages/Cart/Cart";
import ProductPage from "./Pages/ProductPage/ProductPage";
import NotFound from "./Pages/NotFound/NotFound";
import { Routes, Route, Link } from "react-router-dom";

class App extends Component {
    state = {
        cart: [],
    };
    
    render() {
        return (
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Category />} />
                    <Route path="/:category" element={<Category />} />
                    <Route
                        path="/:category/:productId"
                        element={<ProductPage />}
                    />
                    <Route path="cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        );
    }
}

export default App;
