import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShoppingCart    
} from '@fortawesome/free-solid-svg-icons'


const AddToCart = () => {
    return (
        <AddToCartWrapper>
            <FontAwesomeIcon className="shopping-cart-icon" icon={ faShoppingCart } />
            ADD TO CART
        </AddToCartWrapper>
    )
}

const AddToCartWrapper = styled.button`
    height: 34px;
    font-size: 12px;
    letter-spacing: 0.05em;
    font-weight: 400;
    font-family: "Oswald";
    border-radius: 0;
    padding: 0 12px;
    line-height: 34px;
    background-color: #7CC11F;
    border: none;
    color: #fff;
    &:hover {
        opacity: 0.80;
    }
    .shopping-cart-icon {
        margin-right: 5px;
    }
`

export default AddToCart