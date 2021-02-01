import React from 'react'
import './Contact.css'
// import SocialIcon from 'react-social-icons'

function Navbar() {
    var { SocialIcon } = require('react-social-icons');
    return (
        <div className="contact">
            <span className="contact-label">CONTACT</span>
            <br /><br />
            <div className="socials">
                <SocialIcon className="social" url="http://linkedin.com/in/ajay-yadukrishnan-42854a160" />
                &nbsp;&nbsp;&nbsp;
                <SocialIcon className="social" url="mailto:ajayyadukrishnan@gmail.com" network="mailto" bgColor="#DA5046"/>
                &nbsp;&nbsp;&nbsp;
                <SocialIcon className="social" url="https://twitter.com/__a_j_a_y__" network="twitter" />
                &nbsp;&nbsp;&nbsp;
                <SocialIcon className="social" url="https://www.instagram.com/ajayyadukrishnan/" network="instagram" bgColor="#e95950"/>
            </div>
        </div>
    )
}

export default Navbar;