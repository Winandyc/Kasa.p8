import React from 'react';

/*
 * @brief : Composant Banner qui affiche une image avec un texte associé.
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.image - L'URL de l'image à afficher.
 * @param {string} props.text - Le contenu textuel à afficher.
 * @returns {JSX.Element} Le composant Banner rendu.
 */

const Banner = ({ image, text }) => {
    return (
        <div className="banner">
            <p>{text}</p>
            <img src={image} alt="Bannière" />
        </div>
    );
};

export default Banner;
