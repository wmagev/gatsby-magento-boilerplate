import React from "react"
import { graphql } from "gatsby"

const Product = ({
    data: { magentoProduct: product }
}) => {
    return (
        <>
        { product && 
            (
                <div>{product.name}</div>
            )
        } 
        </>       
    )
}

export default Product

export const query = graphql`
    query ProductQuery($url_key: String) {
        magentoProduct(url_key: { eq: $url_key }) {
            id
            sku
            name
            categories {
                id
                name
                url_path
            }

            configurable_options {
                label
                values {
                    label
                    value_index
                }
            }

            url_key
            price {
                regularPrice {
                    amount {
                        value
                        currency
                    }
                }
            }
        }
    }
`