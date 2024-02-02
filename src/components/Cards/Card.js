import React from 'react';
import { NavLink } from 'react-router-dom';

/*
 * @brief : Composant Card représentant une carte de logement.
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {object} props.logement - Les informations sur le logement à afficher dans la carte.
 * @param {string} props.logement.id - L'identifiant unique du logement.
 * @param {string} props.logement.cover - L'URL de l'image de couverture du logement.
 * @param {string} props.logement.title - Le titre du logement.
 * @returns {JSX.Element} Le composant Card rendu.
 */

const Card = ({ logement }) => {
    return (
        <NavLink className="navLogement" to={`/Accommodation/${logement.id}`}>
            <li className="card">
                <div className="infos">
                    <img src={logement.cover} alt={logement.title} />
                    <p>{logement.title}</p>
                </div>
            </li>
        </NavLink>
    );
};

export default Card;
