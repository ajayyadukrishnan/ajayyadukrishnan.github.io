import React from 'react'
import './Navbar.css'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    return (
        <div className="sticky-navbar">
            <nav className="navigation">
                <ul className="nav-items">
                    <li>
                        <BrowserRouter>
                            <HashLink smooth="true" scroll={el => scrollWithOffset(el)} to='#home'>Home</HashLink>
                        </BrowserRouter>
                    </li>
                    <li><a href="#blog">Blog</a></li>
                    <li>
                        <BrowserRouter>
                            <HashLink smooth="true" scroll={el => scrollWithOffset(el)} to='#about'>About</HashLink>
                        </BrowserRouter></li>
                    <li>
                        <BrowserRouter>
                            <HashLink smooth="true" scroll={el => scrollWithOffset(el)} to='#contact'>Contact</HashLink>
                        </BrowserRouter>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;