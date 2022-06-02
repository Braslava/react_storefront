import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
    render() {
        console.log(this.props);
        const { colors, type } = this.props;
        return (
            <div>
                <p className="product-page__small-title">{type}:</p>
                {colors.map((color) => (
                    <input type="radio" key={color.id} name={type}></input>
                ))}
            </div>
        );
    }
}

export default ColorPicker;
