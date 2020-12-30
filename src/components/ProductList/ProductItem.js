import React from "react"
import styled from "styled-components"
import Img from 'gatsby-image'
import AddToCart from "../Basic/AddToCart"
import PriceBox from "../Basic/PriceBox"

const ProductItem = ({ product }) => {

    return (
        <ProductItemWrapper>
            <ItemBody>
                <ItemImage>
                { product.image.childImageSharp ? (
                        <Img fluid={product.image.childImageSharp.fluid} />
                    ) : (
                        <div>error</div>
                )}
                </ItemImage>
                <ItemDetail>
                    <ProductTitle> { product.name } </ProductTitle>
                    <PriceBox product={ product } />
                    <ProductActions>
                        <AddToCart />
                    </ProductActions>
                </ItemDetail>
            </ItemBody>
        </ProductItemWrapper>
    )
}

export default ProductItem

const ProductItemWrapper = styled.div`
    flex: 0 0 25%;
    text-align: center;
    padding: 0 10px 15px 10px;
    border-left: 1px solid #e3e4e4;
`

const ItemBody = styled.div`
    background: #fff;
    color: #000;
    border-top: 1px solid #e3e4e4;
    padding: 50px 0 10px;    
`

const ItemDetail = styled.div`
    padding: 10px 0;
    color: #777777;    
`

const ItemImage = styled.div`
    border: solid 1px #e8e8e8;
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

const ProductActions = styled.div`
    width: 130px;
    margin: auto;
    position: relative;
`

