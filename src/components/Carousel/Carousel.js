import React, { Component } from "react";

import "./Carousel.css";

import chevronRight from "../../assets/chevron_right_white.svg";
import chevronLeft from "../../assets/chevron_left_white.svg";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { currentImg: 0, showButtons: false };
    }

    showButtons = () => {};

    render() {
        console.log(this.props.images[this.state.currentImg]);
        const { images, name } = this.props;
        return (
            <div>
                <div className="carousel">
                    <div className="carousel__thumbnails-container">
                        {images.map(image => {
                            return (<img className="carousel__thumbnail" src={image} alt={name} key={image}/>)
                        })}
                    </div>
                    <div
                        className="carousel__inner"
                        onMouseOver={this.showButtons()}
                    >
                        <img
                            className="carousel__img--main"
                            src={images[this.state.currentImg]}
                            alt={name}
                        />
                        <button
                            className="carousel__button carousel__button--left"
                            onClick={() => {
                                this.state.currentImg > 0 &&
                                    this.setState({
                                        currentImg: this.state.currentImg - 1,
                                    });
                            }}
                        ></button>
                        <button
                            className="carousel__button carousel__button--right"
                            onClick={() => {
                                this.state.currentImg < images.length - 1 &&
                                    this.setState({
                                        currentImg: this.state.currentImg + 1,
                                    });
                            }}
                        ></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
