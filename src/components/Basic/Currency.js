import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEuroSign,
    faDollarSign
} from '@fortawesome/free-solid-svg-icons'

const Currency = ({ currency, children, className }) => {
    var currencySign = ""
    
    switch (currency) {
        case "EUR":
            currencySign = <FontAwesomeIcon icon={ faEuroSign } />
            break
        default:
            currencySign = <FontAwesomeIcon icon={ faDollarSign } />
    }

    return (
        <span className={ className }>
            {currencySign}
            {children}
        </span>
    )
}

export default Currency