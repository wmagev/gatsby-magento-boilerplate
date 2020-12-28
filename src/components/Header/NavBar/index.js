import React from "react"
import styled from "styled-components"
import StyledLink from "../../Basic/StyledLink"
import Dropdown from "./Dropdown"
import { THEME_SETTING } from "../../../constants"
import { useCategoryData } from "../../../hooks/use-category-data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCaretDown
} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    const categories = useCategoryData()

    const empty = array => !array.length

    const renderNavItem = ({ node: item }) => {
        return (
            <NavBarItem key={ item.magento_id } >
                <StyledLink color="#fff" to={ item.url_path }>
                    { item.name }
                    { !empty(item.childrenMagentoCategory) && <FontAwesomeIcon style={{marginLeft: "6px"}} icon={faCaretDown} />}
                </StyledLink>                
                <DropdownWrapper categories={item.childrenMagentoCategory} />
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

const DropdownWrapper = styled(Dropdown)`
    display: none;    
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
        background: ${THEME_SETTING.HOVER_COLOR};
        cursor: pointer;
    }
    &:hover ${DropdownWrapper} {
        display: block;
    }
`

export default NavBar