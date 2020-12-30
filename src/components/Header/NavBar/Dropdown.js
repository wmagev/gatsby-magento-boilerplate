import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import StyledLink from "../../Basic/StyledLink"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCaretRight
} from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({ categories, className }) => {     

    const empty = array => !array.length

    const renderSubDropdown = childCategories => {        
        return (
            <>
            {!empty(childCategories) && (
                <SubDropdown>
                    { childCategories.map( item => (
                        <SubDropdownItem key={ item.magento_id } to={"/" + item.url_path}>
                            {item.name}                            
                        </SubDropdownItem>
                    ))}
                </SubDropdown>
            )}
            </>
        )
    }    

    return (
        <> 
        {categories && !empty(categories) && (
            <DropdownWrapper className={ className } >
                { categories.map( item => (
                    <DropdownItem key={ item.magento_id } >
                        <StyledLink color="#5D5D5D" hovercolor="#000" to={ "/" + item.url_path } >
                            { item.name }
                            { !empty(item.childrenMagentoCategory) && <FaCaretRightIcon icon={faCaretRight} />}
                        </StyledLink>
                        { renderSubDropdown(item.childrenMagentoCategory) }
                    </DropdownItem>
                ))}
            </DropdownWrapper>
        )}
        </>
    )
}

const DropdownWrapper = styled.div`
    position: absolute;
    left: 0px;
    right: auto;
    border-radius: 0px 6px 6px;
    z-index: 1;
    background-color: #ABABAB;
    min-width: 230px;
    padding: 6px 8px;   
`

const SubDropdown = styled.div`
    position: absolute;
    border-radius: 6px;
    z-index: 1;
    background-color: #ABABAB;
    min-width: 230px;
    padding: 6px 8px;
    left: 98%;
    top: -6px;
    display: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
`


const SubDropdownItem = styled(Link)`
    color: #5D5D5D;
    display: block;
    text-decoration: none;
    &:hover {
        color: #000;
    }
`

const DropdownItem = styled.div`
    color: #5D5D5D;
    position: relative;
    &:hover ${SubDropdown} {
        display: block;
    }
`

const FaCaretRightIcon = styled(FontAwesomeIcon)`
    right: 10px;
    top: calc(50% - 6px);
    position: absolute;
`

export default Dropdown