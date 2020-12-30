import React from "react"
import styled from "styled-components"
import Currency from "./Currency"

const PriceBox = ({ product }) => {

    const regularPrice = product.price.regularPrice.amount.value
    const currency = product.price.regularPrice.amount.currency    

    return (
        <PriceBoxWrapper>
            { product.special_price ? (
                    <>
                        <SpecialPrice currency={currency}>{ product.special_price }</SpecialPrice>
                        <OldPrice currency={currency}>{ regularPrice }</OldPrice>
                    </>
                ) : (
                    <SpecialPrice currency={currency}>{ regularPrice }</SpecialPrice>
                )
            }
        </PriceBoxWrapper>
    )
}

const PriceBoxWrapper = styled.div`
    margin: 8px 0 13px;
    span {
        padding-right: 3px;
    }
`

const SpecialPrice = styled(Currency)`
    font-size: 18px;
    color: #212529;
`

const OldPrice = styled(Currency)`
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
`

export default PriceBox