import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    color: ${props => props.color};
    &:hover {
        color: ${props => props.hovercolor || "initial"};
    }
`

export default StyledLink