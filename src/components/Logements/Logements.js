import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Cards/Card';

/*
 * @brief : Composant Logements qui affiche une liste de cartes de logements.
 * @component
 * @returns {JSX.Element} Le composant Logements rendu.
 */

const Logements = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/data.json').then((resp) => setData(resp.data));
    }, []);

    return (
        <div className="containerLogements">
            <ul>
                {data.map((logement) => (
                    <Card key={logement.id} logement={logement} />
                ))}
            </ul>
        </div>
    );
};

export default Logements;
