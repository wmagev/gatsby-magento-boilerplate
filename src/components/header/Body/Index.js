import React from "react"
import styled from "styled-components"
import MiniCart from "./MiniCart"
import logo from "../../../images/logo.png"
import { THEME_SETTING } from "../../../constants"

const Body = () => {
    return (
        <BodyWrapper>
            <SearchBoxWrapper>
                <SearchBox placeholder="Search" />
            </SearchBoxWrapper>
            <Logo src={logo} />
            <CallUs>
                <span>
                    CALL US NOW
                    <br />
                    <a href="tel:095761333"> 09 576 1333 </a>
                </span>
            </CallUs>
            <MiniCart />
        </BodyWrapper>
    )
}

const BodyWrapper = styled.div`
    position: relative;
    text-align: center;
    color: ${THEME_SETTING.COLOR};
    font-size: 20px;
    padding: 0 15px;
    margin: 0;
`
const Logo = styled.img`
    width: 480px;
    height: 135px;
    margin: 11px auto;
    display: block;
`

const SearchBoxWrapper = styled.div`
    position: absolute;
    margin-left: 0;
    left: 15px;
    top: calc(50% - 20px);
    max-width: 300px;
    width: 450px;
`

const SearchBox = styled.input`
    border-radius: 20px;
    color: #8d8d8d;
    height: 40px;
    width: 100%;
    padding: 10px 50px 10px 20px;
    box-sizing: border-box;
    border: none;
`

const CallUs = styled.div`
    display: inline-block;
    text-align: left;
    font-size: 11px;
    height: 42px;
    line-height: 1;
    border-right: solid 2px #dde0e2;
    padding-right: 35px;
    margin-right: 0;
    margin-top: -21px;
    right: 100px;
    position: absolute;
    top: 50%;
    span {
        margin-top: 4px;
        display: block;
        font-size: 11px;
        font-weight: 600;
    }
    a {
        font-size: 18px;
        font-weight: 700;      
        display: block;
        color: #fff;
        line-height: 27px;
        text-decoration: none;
    }
`

export default Body