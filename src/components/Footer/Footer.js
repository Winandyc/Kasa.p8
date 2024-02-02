import React from 'react';
import logoNB from '../../assets/Images/LOGONB.png';

/*
 * @brief : Composant Footer qui affiche le pied de page de l'application.
 *
 * @component
 * @returns {JSX.Element} Le composant Footer rendu.
 */

const Footer = () => {
    return (
        <footer>
            <img src={logoNB} alt="logo de kasa" />
            <p>©️ 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
