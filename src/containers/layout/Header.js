import React from "react"
import styled from "styled-components"
import BusinessHours from "../../components/header/BusinessHours"
import HeaderLinksBar from "../../components/header/HeaderLinksBar"
import HeaderBody from "../../components/header/Body"
import { themeSetting } from "../../constants"

const Header = () => {
    return (
        <>
            <BusinessHours />
            <HeaderWrapper>
                <HeaderLinksBar />
                <HeaderBody />
            </HeaderWrapper>
        </>
    )
}

const HeaderWrapper = styled.div`
    border-top: 3px solid ${themeSetting.color};
    border-bottom: 1px solid #f3f3f3;
`

export default Header