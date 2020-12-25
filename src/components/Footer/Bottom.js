import React from "react"
import styled from "styled-components"
import { THEME_SETTING } from "../../constants"

const Bottom = () => {
    return (
        <BottomWrapper>

        </BottomWrapper>
    )
}

const BottomWrapper = styled.div`
    background-color: ${THEME_SETTING.FOOTER.BOTTOM_BG_COLOR};
`

export default Bottom