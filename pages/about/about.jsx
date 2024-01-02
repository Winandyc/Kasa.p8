// IMPORTS
import React from 'react'
import data from '../../data/collapse.json'

// COMPONENTS
import Collapse from '../../collapse/collapse.jsx'

// ASSETS
import Banner from '../../src/assets/about.image.png'

// STYLES
import './about.css'


// Page About > Contient une bannière et le composant Collapsehome
function About() {
    return (
        <section>
            <img className='BannerCont' alt='Paysage avec montagnes' src={Banner} />
            <Collapse data={data} />
        </section>
    )
}

export default About
