import React from "react"
import styled from "styled-components"
import { themeSetting } from "../../constants"

const HeaderLinksBar = () => {
    return (
        <HeaderLinksWrapper>
            <span> Compare () </span>
            <HeaderLinks>
                <li>Appliance Outlet (The Real One) Your Genuine Clearance Store - The Best Deals, Always!</li>
                <li>Agent Login</li>
                <li>Sign In</li>
                <li>Create an account</li>
            </HeaderLinks>
        </HeaderLinksWrapper>
    )
}

const HeaderLinksWrapper = styled.div`
    color: ${ themeSetting.lightColor };
    padding: 8px 15px;
    font-weight: 600;
    letter-spacing: 0.025em;
    font-size: 11px;
    text-transform: uppercase;
    border-bottom: #eeeeee solid 2px;
`

const HeaderLinks = styled.ul`
    float:right;
    margin: 0;
    li {
        float: left;
        list-style: none;
        padding: 0 15px;
    }
`

export default HeaderLinksBar 