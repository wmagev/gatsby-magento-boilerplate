import React from "react"
import styled from "styled-components"
import ProductItem from "./ProductItem"

const ProductList = ({ products }) => {    
    return (
        <ProductListWrapper>
            <Toolbar>

            </Toolbar>
            <ProductCollection>
                {products.map( ({ node: item }) => (
                    <ProductItem key={item.id} product={item} />
                ))}
            </ProductCollection>
        </ProductListWrapper>
    )
}

const ProductListWrapper = styled.div`
    width: 75%;
    float: right;
    padding-left: 20px;
`

const Toolbar = styled.div`
    
`

const ProductCollection = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default ProductList