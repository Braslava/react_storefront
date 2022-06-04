import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
    render() {
        // console.log(this.props);
        const { colors, type, onChangeValue } = this.props;
        return (
            <div>
                <p className="product-page__small-title">{type}:</p>
                {colors.map((color) => (
                    <input
                        className="color-picker__radio"
                        type="radio"
                        key={color.id}
                        name={type}
                        value={color.displayValue}
                        onChange={(e) => onChangeValue(e)}
                    ></input>
                ))}
            </div>
        );
    }
}

export default ColorPicker;
