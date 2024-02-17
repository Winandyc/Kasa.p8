function ExpansionPanel({ title, children }) {
    return (
        <li>
            <details> {/* balise qui sert pour les expansion panels */}
                <summary className='title'> {/* balise qui permet l'ouverture des expansion panels quand on clique dessus */}
                    <h2>{title}</h2>
                    <img
                        src="/vectorBas.svg"
                        alt=""
                    />
                </summary>

                {children} {/* Permet d'insérer l'enfant placé entre les balises du composant. ex : <ExpansionPanel>enfant</ExpansionPanel> sans définir le type de contenu à l'intérieur */}
            </details>
        </li>
    )
}

export default ExpansionPanel
