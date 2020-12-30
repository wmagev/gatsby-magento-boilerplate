import React from "react"
import styled from "styled-components"
import HomeBanner from "../images/banner.gif"
import ProductCarousel from "../components/Carousel"

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Banner src={HomeBanner} />
            <ProductCarousel title="Featured" type="featured" />
            <ProductCarousel title="Latest" type="latest" />
        </HomePageWrapper>
    )
}

const HomePageWrapper = styled.div`    
    color: #fff;
    text-align: center;    
`

const Banner = styled.img`
    display: block;
    width: 100%;
    transform-style: preserve-3d;
`

export default HomePage