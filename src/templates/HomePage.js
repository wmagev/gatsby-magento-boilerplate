import React from "react"
import styled from "styled-components"
import HomeBanner from "../images/banner.gif"
const HomePage = () => {
    return (
        <HomePageWrapper>
            <Banner src={HomeBanner} />
        </HomePageWrapper>
    )
}

const HomePageWrapper = styled.div`
    font-size: 72px;
    color: #fff;
    text-align: center;
`

const Banner = styled.img`
    display: block;
    width: 100%;
    transform-style: preserve-3d;
`

export default HomePage