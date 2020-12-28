import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./SliderItem"
import SliderBarSrc from "../../images/slider-bar.png"


const ProductCarousel = ({ title, type }) => {
    const products = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    }
    return (
        <SliderWrapper>
            <SliderTitle>
                {title}
            </SliderTitle>
            <Slider {...settings} style={{width: "calc(100% - 30px)", margin: "0 auto"}}>
                { products.map(item => (
                    <SliderItem key={item} title={item} />
                ))}
            </Slider>
        </SliderWrapper>
    )
}
const SliderWrapper = styled.div`

`

const SliderTitle = styled.h2`
    margin: 20px 0 5px 0;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 300;
    line-height: 42px;
    text-transform: uppercase;
    text-align: left;
    background: url(${SliderBarSrc}) bottom right no-repeat !important;
`


export default ProductCarousel