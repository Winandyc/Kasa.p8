import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Carroussel from '../components/Carroussel/Carroussel';
import InfosLogement from '../components/InfosLogement/InfosLogement';

/*
 * @brief : Composant Accommodation qui représente la page d'un logement particulier.
 * @component
 * @returns {JSX.Element} Le composant Accommodation rendu.
 */

const Accommodation = () => {
    const [data, setData] = useState([]); // useState : permet de déclarer une variable d'état, ici initialisée avec un tableau vide []
// "setData" est une fonction qui permet de mettre à jour cette variable d'état (= changer l'état)
    useEffect(() => {
        // useEffect : permet d'effectuer des effets de côté. Ici, utilisé pour effectuer une requête HTTP GET à l'URL "/data.json" lors
        // du premier rendu du composant (grâce au tableau de dépendances vide [] passé en second argument). Une fois que la réponse est
        // reçue, la fonction passée à then est appelée, mettant à jour l'état data avec les données reçues du serveur.
        axios.get('/data.json').then((resp) => setData(resp.data)); // ici, axios permet de récupérer les données du fichier "/data.json"
    }, []);

    return (
        <div>
            <Header />
            <Carroussel data={data} />
            <InfosLogement data={data} />
            <Footer />
        </div>
    );
};

export default Accommodation;
