import React from "react"
import styled from "styled-components"
import { THEME_SETTING } from "../../constants"
import { ContactList, InformationList, FeatureList, NewsLetter } from "./BodyBlockContents"

const Body = () => {
    return (
        <BodyWrapper>
            <Container>
                <Ribbon> About Us </Ribbon>
                <ContainerBody>
                    <Column3>
                        <BlockTitle>
                            <strong>Contact Information</strong>
                        </BlockTitle>
                        <BlockContent>
                            <ContactList />
                        </BlockContent>
                    </Column3>
                    <Column2>
                        <BlockTitle>
                            <strong>Information</strong>
                        </BlockTitle>
                        <BlockContent>
                            <InformationList />
                        </BlockContent>
                    </Column2>
                    <Column3>
                        <BlockTitle>
                            <strong>We Provide</strong>
                        </BlockTitle>
                        <BlockContent>
                            <FeatureList />
                        </BlockContent>
                    </Column3>
                    <Column3>
                        <BlockTitle>
                            <strong>Newsletter</strong>
                        </BlockTitle>
                        <BlockContent>
                            <NewsLetter />
                        </BlockContent>
                    </Column3>
                </ContainerBody>
            </Container>
        </BodyWrapper>
    )
}

const BodyWrapper = styled.div`
    font-size: 13px;
    letter-spacing: 0.005em;
    font-weight: 400;
    max-width: 1590px;
    margin: auto;
    background: transparent;
    padding: 40px 0;
`

const Container = styled.div`
    position: relative;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    &:after {
        content: "";
        display: table;
        clear: both;
    }
`

const Ribbon = styled.div`
    background: ${THEME_SETTING.COLOR};
    position: absolute;
    margin: -56px 0 25px;
    padding: 10px 20px 6px 20px;
    color: #ffffff;
    font-size: 20px;
    font-family: "Shadows Into Light", cursive;
    line-height: 1;
    &:before {
        content: '';
        display: block;
        width: 7px;
        height: 0;
        position: absolute;
        left: -10px;
        top: 0;
        border-right: 10px solid ${THEME_SETTING.COLOR};
        border-top: 16px solid transparent;
    }
`
const ContainerBody = styled.div`
    display: -webkit-box;
    flex-wrap: wrap;
`
const Column = styled.div`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding: 0 15px;
`

const Column3 = styled(Column)`
    -webkit-flex: 0 0 25%;
    -moz-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;

`

const Column2 = styled(Column)`
    -webkit-flex: 0 0 16.6666666667%;
    -moz-flex: 0 0 16.6666666667%;
    -ms-flex: 0 0 16.6666666667%;
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
`

const BlockTitle = styled.div`
    line-height: 1.2;
    font-size: 16px;
    margin: 18px 0 20px 0;
    strong {
        font-family: 'Oswald';
        text-transform: uppercase;
    }
`

const BlockContent = styled.div`
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        &.contact-info {
            li { padding: 7px 0; }
        }

        li {
            padding: 8px 0 0 0;
            margin: 0;
            &:first-child {
                padding-top: 0;
            }
            a {
                text-decoration: none;
                color: #fff;
            }
            p {
                line-height: 1;
                letter-spacing: 0.005em;
                b {
                    font-family: 'Oswald';            
                    margin-bottom: 7px;
                    display: inline-block;
                    text-transform: uppercase;
                }
            }            
        }        
    }
`

export default Body