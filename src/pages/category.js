import React from "react"
import { graphql } from "gatsby"

const Category = ({
    data: { magentoCategory: category }
}) => {    
    return (
        <>
        { category &&
            (
                <div>{category.name}</div>
            )
        }
        </>       
    )
}

export default Category

export const query = graphql`
    query CategoryQuery($url_key: String) {
        magentoCategory(url_key: { eq: $url_key }) {
            id
            name
            products {
                items {
                    id
                }
            }
        }
    }
`