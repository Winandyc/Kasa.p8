import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router-dom';

/*
 * @brief : Composant Error404 qui affiche une page d'erreur 404.
 * @component
 * @returns {JSX.Element} Le composant Error404 rendu.
 */

const Error404 = () => {
    return (
        <div>
            <Header />
            <div className="error">
                <p className="errorNumber">404</p>
                <p className="oups">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <NavLink to="/">
                    <p className="errorAccueil">
                        Retourner sur la page d'accueil
                    </p>
                </NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default Error404;
