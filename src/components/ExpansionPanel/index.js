import React from 'react'

function ExpansionPanel({ title, text }) {
    return (
        <li>
            <details> {/* balise qui sert pour les expansion panels */}
                <summary className='title'> {/* balise qui permet l'ouverture des expansion panels quand on clique dessus */}
                    <h2>{title}</h2>
                    <img
                        src="/vectorBas.svg"
                        alt="Flèche vers le bas"
                    />
                </summary>

                <p>{text}</p>
            </details>
        </li>
    )
}

export default ExpansionPanel
