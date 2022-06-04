import React, { Component } from "react";
import "./TextAttributePicker.css";

class TextAttributePicker extends Component {
    render() {
        const { attributes, type, onChangeValue } = this.props;
        // console.log(this.props);
        return (
            <div>
                <p>Text attribute picker</p>
                <div>
                    <p className="product-page__small-title">{type}:</p>
                    {attributes.map((attribute) => (
                        <label key={attribute.id} htmlFor={type}>
                            {attribute.displayValue}
                            <input
                                type="radio"
                                name={type}
                                value={attribute.displayValue}
                                onChange={(e) => onChangeValue(e)}
                            ></input>
                        </label>
                    ))}
                </div>
            </div>
        );
    }
}

export default TextAttributePicker;
