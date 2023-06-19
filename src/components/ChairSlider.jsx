import React, {useRef} from 'react';
import ProductCard from "./ProductCard";
import chairs from "../assets/data/chairs";
import prev from    "../assets/images/prev.png"
import next from    "../assets/images/next.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChairSlider = () => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }
    if (window.innerWidth > 900 && window.innerWidth < 1200) {
        settings.slidesToShow = 3;
    }
    else if (window.innerWidth > 768 && window.innerWidth < 899) {
        settings.slidesToShow = 2;
    }
    else if (window.innerWidth < 769) {
        settings.slidesToShow = 1;
    }


    const slider = useRef(null)

    return (
        <div className="product__category">
            <Slider ref={slider} {...settings}>
                {chairs.map((item) => <ProductCard key={item.id} item = {item} />)
            }
            </Slider>
            <button onClick={() => slider?.current?.slickPrev()}><img className="slider__prevButton" src={prev} alt=""/></button>
            <button onClick={() => slider?.current?.slickNext()}><img className="slider__nextButton" src={next} alt=""/></button>
        </div>
    );
};

export default ChairSlider;