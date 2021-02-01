import React from 'react'
import './Navbar.css'
import { BrowserRouter} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    return (
        <div className="sticky-navbar">
            <nav className="navigation">
                <ul className="nav-items">
                    <li>
                        <BrowserRouter>
                            <HashLink smooth="true" duration={5000} exact={true} activeClassName='is-active' to='#homeSection'>Home</HashLink>
                        </BrowserRouter>
                    </li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#about">About</a></li>
                    <li>
                        <BrowserRouter>
                            <HashLink smooth="true" animate={{offset:0, duration:10000}} exact={true} activeClassName='is-active' to='#contactSection'>Contact</HashLink>
                        </BrowserRouter>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;