import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

/*
 * @brief : Composant Header qui représente l'en-tête de l'application.
 *
 * @component
 * @returns {JSX.Element} Le composant Header rendu.
 */

const Header = () => {
    return (
        <header>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;
