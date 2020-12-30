import React from "react"
import styled from "styled-components"
import SideBar from "../components/SideBar"
import ProductList from "../components/ProductList"

const CategoryPage = ({ category, products }) => {
    return (
        <>
        { category && (
            <CategoryPageWrapper>
                <SideBar />
                <ProductList products={ products } />
            </CategoryPageWrapper>
        )}
        </>
    )
}

const CategoryPageWrapper = styled.div`
    padding-top: 20px;
    &:after {
        clear: both;
        content: "";
        display: table;
    }
`

export default CategoryPage