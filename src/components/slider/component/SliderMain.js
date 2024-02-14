import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shrimp from "../../../assets/img/product/shrimp/shrimp-prl.png";
import logo from "../../../assets/img/logo.png"
const images = [shrimp, logo]

const SliderMain = () => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
    };
    return (
        <>
            <Slider {...settings}>
                <div>
                    <img className="img-slider" src={shrimp} alt="images-shrimp" />
                </div>
                <div>
                    <img className="img-slider" src={logo} alt="images-shrimp" />
                </div>
                <div>
                    <img className="img-slider" src={shrimp} alt="images-shrimp" />
                </div>
            </Slider>
        </>
    );
};

export default SliderMain;