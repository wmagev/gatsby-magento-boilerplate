import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import CategoryPage from "../templates/CategoryPage"

const Category = ({
    data: { 
        allMagentoProduct: { edges: products},
        magentoCategory: category
}}) => {
    console.log(category)
    console.log(products)
    return (
        <Layout bgColor="#fff">
            <CategoryPage 
                category = { category }
                products = { products }
            />
        </Layout>
    )
}

export default Category

export const query = graphql`
    query CategoryQuery($category_id: Int) {
        allMagentoProduct(filter: {categories: {elemMatch: {id: {eq: $category_id}}}}) {
            edges {
                node {
                    id
                    name
                    special_price
                    image {
                        childImageSharp {
                            fluid(maxWidth: 320, maxHeight: 350) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    price {
                        regularPrice {
                            amount {
                                currency
                                value
                            }
                        }
                    }
                }
            }
        }
        magentoCategory(magento_id: {eq: $category_id}) {
            magento_id
            name
        }
    }
`