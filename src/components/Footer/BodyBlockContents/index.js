import React from "react"
import styled from "styled-components"
import { THEME_SETTING } from "../../../constants"

const ContactList = () => (
    <ul className="contact-info">
        <li><em className="porto-icon-location"></em><p><b>Address:</b><br/>1/335 Ti Rakau Drive, Burswood, Akl</p></li>
        <li><em className="porto-icon-phone"></em><p><b>Phone:</b><br/>09 576-1333</p></li>
        <li><em className="porto-icon-mail"></em><p><b>Email:</b><br/>info@applianceoutlet.co.nz</p></li>
        <li><em className="porto-icon-clock"></em><p><b>Working Days/Hours:</b><br/>Open 7 Days - 9:00AM - 5:00PM</p></li>
    </ul>
)

const InformationList = () => (
    <ul>
        <li><em className="porto-icon-right-dir theme-color"></em><a title="About us" href="https://applianceoutlet.co.nz/about-us">About us</a></li>
        <li><em className="porto-icon-right-dir theme-color"></em><a title="Contact us" href="https://applianceoutlet.co.nz/contact/">Contact us</a></li>
        <li><em className="porto-icon-right-dir theme-color"></em><a title="My account" href="https://applianceoutlet.co.nz/customer/account/">My account</a></li>
        <li><em className="porto-icon-right-dir theme-color"></em><a title="Orders history" href="https://applianceoutlet.co.nz/sales/order/history/">Orders history</a></li>
        <li><em className="porto-icon-right-dir theme-color"></em><a title="Advanced search" href="https://applianceoutlet.co.nz/catalogsearch/advanced/">Advanced search</a></li>
        <li><em className="porto-icon-right-dir theme-color"></em><a title="Payment Information" href="https://applianceoutlet.co.nz/payment-information/">Payment Information</a></li>
        <li><em className="porto-icon-right-dir theme-color"></em><a title="Privacy Policy" href="https://applianceoutlet.co.nz/privacy-policy-cookie-restriction-mode/">Privacy Policy</a></li>
    </ul>
)

const FeatureList = () => (
    <ul>
        <li><em className="porto-icon-right-dir theme-color"></em><a href="https://www.applianceoutlet.co.nz/repairs/new">Appliance Repairs</a></li>
        <li><em className="porto-icon-right-dir theme-color"></em><a title="Delivery and Installation" href="https://applianceoutlet.co.nz/delivery-and-installation-services/">Delivery and Installation</a></li>
        <li><em className="porto-icon-ok theme-color"></em><a title="LG Authorised Seconds" href="https://applianceoutlet.co.nz/lg-and-samsung-products/">LG Authorised Seconds</a></li>
        <li><em className="porto-icon-ok theme-color"></em><a title="Samsung Box Damaged Seconds" href="https://applianceoutlet.co.nz/lg-and-samsung-products/">Samsung Box Damaged Seconds</a></li>
        <li><em className="porto-icon-ok theme-color"></em>European Appliances</li>
        <li><em className="porto-icon-ok theme-color"></em>New Zealand Owned</li>
    </ul>
)

const NewsLetter = () => (
    <>
        <p>Get advance notice on pricing, sales <br/> and specials. Sign up to our email list today</p>
        <SubscribeForm >
            <SubscribeInput name="email" type="email" id="footer_newsletter" placeholder="Email Address" />
            <SubscribeButton title="Subscribe" type="submit">Subscribe</SubscribeButton>
        </SubscribeForm>
    </>
)

const SubscribeInput = styled.input`
    background-color: #fff;
    color: #686865;
    height: 42px;
    border: none;
    font-size: 14px;
    padding: 0 10px;
    border-radius: 5px 0 0 5px;
    width: 100%;
`

const SubscribeButton = styled.button`
    height: 42px;
    color: #fff;
    text-transform: uppercase;
    padding: 0 22px;
    background: #7cc11f;
    border: none;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    font-family: 'Open Sans';
    border-radius: 0 5px 5px 0;
    line-height: 30px;
    vertical-align: top;
    &:hover {
        cursor: pointer;
        background: ${THEME_SETTING.HOVER_COLOR};
    }
`

const SubscribeForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
`

export {
    ContactList,
    InformationList,
    FeatureList,
    NewsLetter
}
