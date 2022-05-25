import React, { Component } from "react";
import "./Loader.css";

class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <p className="loader__text">Loading...</p>
            </div>
        );
    }
}

export default Loader;
