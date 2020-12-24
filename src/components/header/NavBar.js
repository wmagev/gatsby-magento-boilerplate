import React from "react"
import styled from "styled-components"
import { themeSetting } from "../../constants"

const NavBar = () => {
    return (
        <NavBarWrapper>
            <NavBarLinks>
                <NavBarItem>Home</NavBarItem>
                <NavBarItem>Kitchen</NavBarItem>
                <NavBarItem>Living Room</NavBarItem>
                <NavBarItem>Laundry</NavBarItem>
                <NavBarItem>Small-Appliances</NavBarItem>
                <NavBarItem>Electronics</NavBarItem>
                <NavBarItem>Misc</NavBarItem>
                <NavBarItem>Parts</NavBarItem>
            </NavBarLinks>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.div`
    background: ${themeSetting.navBar.bgColor};
    color: #fff;
    text-align: center;
`

const NavBarLinks = styled.ul`
    list-style: none;
    margin: 0;
`

const NavBarItem = styled.li`
    margin: 0 9px 0 0;
    display: inline-block;
    position: relative;
    font-size: 12px;
    font-weight: 700;
    line-height: 55px;
    padding: 0 12px;
    text-align: left;
    text-transform: uppercase;
    &:hover {
        background: ${themeSetting.navBar.itemHoverBgColor};
    }
`

export default NavBar