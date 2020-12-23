import React from "react"
import { graphql } from "gatsby"

const Product = data => {
    console.log(data)
    return (
        <h2>Product Page</h2>
    )
}

export const query = graphql`
    query ProductQuery($url_key: String) {
        magentoProduct(url_key: { eq: $url_key }) {
            id
            sku
            name
            description
            small_image
            image {
                childImageSharp {
                    fluid(maxWidth: 1024, maxHeight: 1024) {
                        src
                        srcSet
                        sizes
                        aspectRatio
                        base64
                    }
                }
            }

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