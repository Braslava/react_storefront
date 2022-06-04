import React, { Component } from "react";
import "./Carousel.css";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { currentImgIndex: 0 };
    }

    showPrevImage = () => {
        this.state.currentImgIndex > 0 &&
            this.setState({
                currentImgIndex: this.state.currentImgIndex - 1,
            });
    };

    showNextImage = () => {
        this.state.currentImgIndex < this.props.images.length - 1 &&
            this.setState({
                currentImgIndex: this.state.currentImgIndex + 1,
            });
    };

    showClickedImage = (e) => {
        const clickedImageIndex = e.currentTarget.getAttribute("index");
        // console.log("index", clickedImageIndex);
        this.setState({
            currentImgIndex: parseInt(clickedImageIndex),
        });
        console.log(this.state.currentImgIndex);
        // console.log(this.props.images);
    };

    render() {
      //  console.log(this.props.images[this.state.currentImgIndex]);
        const { images, name } = this.props;
        const multipleImages = images.length > 1;
        //  console.log("multiple? ", multipleImages)

        return (
            <div>
                <div className="carousel">
                    <div className="carousel__thumbnails-container">
                        {images.map((image, index) => {
                            return (
                                <button
                                    index={index}
                                    key={image}
                                    className="carousel__thumbnail-btn"
                                    onClick={(e) => this.showClickedImage(e)}
                                >
                                    <img
                                        className="carousel__thumbnail-img"
                                        src={image}
                                        alt={name}
                                    />
                                </button>
                            );
                        })}
                    </div>
                    <div className="carousel__inner">
                        <img
                            className="carousel__img--main"
                            src={images[this.state.currentImgIndex]}
                            alt={name}
                        />
                        {multipleImages && (
                            <button
                                className="carousel__button carousel__button--left"
                                onClick={() => this.showPrevImage()}
                            ></button>
                        )}
                        {multipleImages && (
                            <button
                                className="carousel__button carousel__button--right"
                                onClick={() => this.showNextImage()}
                            ></button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
