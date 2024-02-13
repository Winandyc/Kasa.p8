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

const Card = ({ logement }) => { // Le paramètre du composant prend ici la forme d'une prop (= propriété) // Voir lignes 4 à 14.
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














// Ligne 18 : <NavLink className="navLogement" to={/Accommodation/${logement.id}}>: Utilise le composant NavLink de React Router pour
// créer un lien vers la page de détails de l'hébergement correspondant à l'ID du logement. L'ID du logement est extrait de la propriété
// logement passée au composant.
