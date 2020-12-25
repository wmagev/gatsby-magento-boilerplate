import React from "react"
import styled from "styled-components"
import FooterBottom from "./Bottom"
import FooterBody from "./Body"

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterBody />            
            <FooterBottom />
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    color: #fff;
`
export default Footer