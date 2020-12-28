import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShoppingCart    
} from '@fortawesome/free-solid-svg-icons'
import DemoImgSrc from "../../images/demo-product.jpg"

const SliderItem = ({ title }) => {
    return (
        <SliderItemWrapper>
            <ItemBody>
                <ItemImage>
                    <img src={ DemoImgSrc } alt="demp-product" />
                </ItemImage>
                <ItemDetail>
                    <ProductTitle> Product { title.toString() } </ProductTitle>
                    <PriceBox>
                        <SpecialPrice>$899.00</SpecialPrice>
                        <OldPrice>$1199.00</OldPrice>
                    </PriceBox>
                    <ProductActions>
                        <AddToCart>
                            <FontAwesomeIcon className="shopping-cart-icon" icon={faShoppingCart} />
                            ADD TO CART 
                        </AddToCart>
                    </ProductActions>
                </ItemDetail>
            </ItemBody>
        </SliderItemWrapper>
    )
}

const SliderItemWrapper = styled.div`
    padding: 10px;
`   
const ItemBody = styled.div`
    background: #fff;
    color: #000;
`

const ItemDetail = styled.div`
    padding: 10px 0;
    color: #777777;    
`

const ItemImage = styled.div`

`

const ProductTitle = styled.strong`
    display: block;
    font-size: 14px;
    margin: 0 0 3px 0;
    hyphens: auto;
    min-height: 50px;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
`
const PriceBox = styled.div`
    margin: 8px 0 13px;
    span {
        padding-right: 3px;
    }
`

const SpecialPrice = styled.span`
    font-size: 18px;
    color: #212529;
`

const OldPrice = styled.span`
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
`

const ProductActions = styled.div`
    width: 130px;
    margin: auto;
    position: relative;
`

const AddToCart = styled.button`
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
export default SliderItem