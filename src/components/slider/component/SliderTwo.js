import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shrimp from "../../../assets/img/product/shrimp/shrimp-prl.png";
import logo from "../../../assets/img/logo.png"
const images = [shrimp, logo]

const SliderTwo = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img className="img-slider-one" src={shrimp} alt="images-shrimp" />
                </div>
                <div>
                    <img className="img-slider-one" src={logo} alt="images-shrimp" />
                </div>
                <div>
                    <img className="img-slider-one" src={shrimp} alt="images-shrimp" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderTwo;