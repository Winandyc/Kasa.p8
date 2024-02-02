import React from 'react';
import { NavLink } from 'react-router-dom';

/*
 * @brief : Composant Navigation qui affiche la barre de navigation avec des liens vers différentes pages.
 * @component
 * @returns {JSX.Element} Le composant Navigation rendu.
 */

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? 'navActive' : '')}
                >
                    <li>ACCUEIL</li>
                </NavLink>
                <NavLink
                    to="/About"
                    className={(nav) => (nav.isActive ? 'navActive' : '')}
                >
                    <li>A PROPOS</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
