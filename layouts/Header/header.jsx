// IMPORTS
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// ASSETS
import Logo from '../../src/assets/logo.png'

// STYLES
import './header.css'


function Header() {
    return (
        <nav className='ContHeader'>
            <Link to="/">
                <img className='HomeLogo' alt='Logo de kasa' src={Logo} />
            </Link>

            <div>
                <NavLink to="/" className='StyledLink'>
                    Accueil
                </NavLink>

                <NavLink to="/about" className='StyledLink'>
                    À Propos
                </NavLink>
            </div>
        </nav>
    )
}

export default Header
