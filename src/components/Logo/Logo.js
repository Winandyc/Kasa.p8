import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/LOGO.png';

/*
 * @brief : Composant Logo qui affiche le logo de l'application avec un lien vers la page d'accueil.
 * @component
 * @returns {JSX.Element} Le composant Logo rendu.
 */

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo de kasa" />
            </Link>
        </div>
    );
};

export default Logo;
