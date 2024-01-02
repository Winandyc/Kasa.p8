// IMPORTS
import React from 'react'
import './home.css'

// COMPONENTS
import Cardslocation from '../../cardsLocation/cardsLocation.jsx'

// IMGs
import Banner from '../../src/assets/banner-home.png'


// Page d'acceuil > Contient une bannière et le composant Cardslocation
function Home() {
   return (
      <section>
         <div className='BannerCont'>
            <img className='BannerImg' src={Banner} alt='Paysage' />
         </div>
         <Cardslocation />
      </section>
   )
 }

 export default Home
