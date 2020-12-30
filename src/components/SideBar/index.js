import React from "react"
import styled from "styled-components"

const SideBar = () => {
    return (
        <SideBarWrapper>
            SideBar
        </SideBarWrapper>
    )
}

const SideBarWrapper = styled.div`
    float: left;
    width: 25%;    
    border: 1px solid #ddd;
    padding: 30px 20px;    
`

export default SideBar