// IMPORTS
import React from 'react'
import {Link} from 'react-router-dom'

// ASSETS
import LogoFooter from '../../src/assets/logo-footer.png'

// STYLES
import './footer.css'

// Layout Footer
function Footer() {
   return (
      <footer className='ContFooter'>
         <Link to="/">
            <img src={LogoFooter} alt='Logo de Kasa'/>
         </Link>

         <p className='FooterText'>© 2023 Kasa. All rights reserved</p>
      </footer>
   )
 }

 export default Footer
