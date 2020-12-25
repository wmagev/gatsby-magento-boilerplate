import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShoppingCart,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'

const MiniCart = () => {
    return (
        <MiniCartWrapper>
            <MiniCartIcon>
                <FontAwesomeIcon className="shopping-cart-icon" icon={faShoppingCart} />
                <Badge>0</Badge>
                <FontAwesomeIcon className="down-arrow-icon" icon={faChevronDown} />
            </MiniCartIcon>
        </MiniCartWrapper>
    )
}

const MiniCartWrapper = styled.div`
    background-color: transparent;
    width: 70px;
    height: 41px;
    text-align: center;
    box-shadow: none;
    border-radius: 0;
    border: none;
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -20px;
`

const MiniCartIcon = styled.div`
    color: #fff;
    padding-right: 18px;
    font-size: 25px;
    &:hover {
        cursor: pointer;
    }
    .down-arrow-icon {
        font-size: 12px;        
        position: absolute;
        right: 0px;
        top: 25%;
    }
`

const Badge = styled.span`
    margin-top: -21px;
    background-color: #ff5b5b;
    right: 20px;
    width: 16px;
    height: 16px;
    font-size: 10px;
    color: #fff;
    text-align: center;
    border-radius: 20px;
    position: absolute;
    top: 50%;
`


export default MiniCart