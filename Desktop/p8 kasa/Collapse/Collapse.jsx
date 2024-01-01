// IMPORTS
import React, { useState } from 'react'

// ASSETS
import chevronUp from "../src/assets/chevron-up.png"
import chevronDown from "../src/assets/chevron-down.png"

// STYLES
import "./collapse.css"



function Collapse({ title, content }) {
    // défini le collapse par défaut comme fermé
    const [contentVisible, setContentVisible] = useState(false)

    // à chaque clic sur le collapse, ca inverse la valeur pour le ouvert/fermé
    const affContent = () => {
        setContentVisible(!contentVisible) // inverse la valeur actuelle
    }

    // défini les classes selon si c'est visible ou caché, idem pour le chevron
    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse"
    const collapseChevron = (contentVisible ? chevronUp : chevronDown)

    return (
        <div className='collapse'>

            {/* affiche le titre et le chevron */}
            <div className='collapse__header' onClick={affContent}>
                <span>{title}</span>
                <div className="chevronValue">
                    <img src={collapseChevron} alt="" />
                </div>
            </div>

            {/* affiche le contenu */}
            <div className={collapseContent}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

export default Collapse
