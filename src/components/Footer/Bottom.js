import React from "react"
import styled from "styled-components"
import { THEME_SETTING } from "../../constants"
import creditIconSrc from "../../images/creditcardicons.png"

const Bottom = () => {
    const currentYear = new Date().getFullYear()

    return (
        <BottomWrapper>
            <Container>
                <CopyRight>© Appliance Outlet {currentYear}</CopyRight>
                <CreditIconWrapper>
                    <CreditIcon src={creditIconSrc} />
                </CreditIconWrapper>
            </Container>
        </BottomWrapper>
    )
}

const BottomWrapper = styled.div`
    background-color: ${THEME_SETTING.FOOTER.BOTTOM_BG_COLOR};    
    text-align: center;
    padding: 30px 0 35px;
`

const Container = styled.div`
    max-width: 1590px;
    margin: auto;
    width: 100%;
    padding: 0 15px;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        background-color: #353a3e;
        left: 15px;
        right: 15px;
        top: -30px;
        height: 1px;
        width: calc(100% - 30px);
    }
    &:after {
        content: "";
        display: table;
        clear: both;
    }
`

const CopyRight = styled.address`
    float: left;
    line-height: 36px;
    font-size: 11px;
    font-style: normal;
    margin: 0;
`

const CreditIconWrapper = styled.div`
    margin-left: 60px;
    max-width: 500px;
    float: right;
`
const CreditIcon = styled.img`
    width: 50%;
    margin: 0;
`

export default Bottom