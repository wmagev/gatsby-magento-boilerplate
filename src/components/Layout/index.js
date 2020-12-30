import React from "react"
import styled from "styled-components"
import Header from "../Header"
import Footer from "../Footer"
import backgroundImage from "../../images/body-bg.gif"
import { THEME_SETTING } from "../../constants"

const Layout = ({ children, bgColor }) => {
    return (
        <Container>
            <Header />
            <ContainerBody bgColor={bgColor}>
                { children }
            </ContainerBody>
            <Footer />
        </Container>
    )
}
export default Layout

const Container = styled.div`
    background: url(${ backgroundImage });
    width: 100%;
    min-height: 100%;
    height: fit-content;
    font-family: ${ THEME_SETTING.FONT_FAMILY };    
    input:focus, button:focus
    {
        outline: none;
    }
`

const ContainerBody = styled.div`
    padding: 20px 15px 50px;
    background: ${props => props.bgColor || "transparent"}
`