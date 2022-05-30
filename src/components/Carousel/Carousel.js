import React, { Component } from "react";

import "./Carousel.css";

import chevronRight from "../../assets/chevron_right_white.svg";
import chevronLeft from "../../assets/chevron_left_white.svg";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { currentImg: 0, showButtons: false };
    }

    showButtons = () => {

    }
    render() {
        console.log(this.props.images[this.state.currentImg]);
        return (
            <div>
                <div className="carousel">
                    <div className="carousel__thumbnails"></div>
                    <div
                        className="carousel__inner"
                        onMouseOver={this.showButtons()}
                    >
                        <img
                            className="carousel__img--main"
                            src={this.props.images[this.state.currentImg]}
                            alt={this.props.name}
                        />
                        <button className="carousel__button carousel__button--left"></button>
                        <button className="carousel__button carousel__button--right"></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
