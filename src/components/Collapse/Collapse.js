import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpansionPanel from '../ExpansionPanel';

/*
 * @brief : Composant Collapse qui affiche une liste de sections collapsibles.
 *
 * @component
 * @returns {JSX.Element} Le composant Collapse rendu.
 *
 * @brief : Fonction pour basculer l'état de sélection d'une section.
 * @function toggle
 * @param {number} index - L'index de la section à basculer.
 */

const Collapse = () => {
    const [collapse, setData] = useState([]);

    useEffect(() => {
        axios.get('/collapse.json').then((resp) => setData(resp.data));
    }, []);


    return (
        <div className="collapse">
            <ul>
                {collapse.map(({aboutTitle, aboutText}, index) => ( // index :  représente l'indice de l'élément actuel dans le tableau collapse.map.
                    <ExpansionPanel title={aboutTitle} key={index}>
                        <p>{aboutText}</p>
                    </ExpansionPanel>
                ))}
            </ul>
        </div>
    );
};

export default Collapse;
