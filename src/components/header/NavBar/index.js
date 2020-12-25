import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { THEME_SETTING } from "../../../constants"
import { useCategoryData } from "../../../hooks/use-category-data"

const NavBar = () => {

    const categories = useCategoryData()

    const renderNavItem = ({ node: item }) => {
        return (
            <NavBarItem key={item.magento_id}>
                <Link to={item.url_path}>
                    {item.name}
                </Link>
            </NavBarItem>
        )
    }

    return (
        <NavBarWrapper>
            <NavBarLinks>
                { categories && categories.map( renderNavItem ) }
            </NavBarLinks>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.div`
    background: ${THEME_SETTING.NAV_BAR.BG_COLOR};
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
        background: ${THEME_SETTING.NAV_BAR.ITEM_HOVER_BG_COLOR};
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
`

export default NavBar