import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import Collapse from '../components/Collapse/Collapse';
import imgBannerAbout from '../assets/Images/bannerAbout.png';

/*
 * @brief : Composant About qui représente la page "À Propos".
 * @component
 * @returns {JSX.Element} Le composant About rendu.
 */

const About = () => {
    return (
        <div>
            <Header />
            <Banner image={imgBannerAbout} />
            <Collapse />
            <Footer />
        </div>
    );
};

export default About;
