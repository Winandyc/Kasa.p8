import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Carroussel from '../components/Carroussel/Carroussel';
import InfosLogement from '../components/InfosLogement/InfosLogement';
import Error404 from './Error404/Error404';

/*
 * @brief : Composant Accommodation qui représente la page d'un logement particulier.
 * @component
 * @returns {JSX.Element} Le composant Accommodation rendu.
 */

const Accommodation = () => {
    const { id } = useParams(); // données récupérées à partir du hook "useParams"

    const [isFound, setIsFound] = useState(true);
    const [data, setData] = useState([]); // useState : permet de déclarer une variable d'état, ici initialisée avec un tableau vide []
    // "setData" est une fonction qui permet de mettre à jour cette variable d'état (= changer l'état)
    useEffect(() => { // utilisé pour récupérer les données du logement correspondant à l'ID extrait à l'aide de "useParams".

        axios.get('/data.json').then((resp) => {
            const logementFound = resp.data.find((logement) => logement.id === id); // Recherche le logement correspondant à l'ID récupérée du data.json (axios)
            if (logementFound === undefined) { // Si aucun logement correspondant n'est trouvé
                setIsFound(false); // Met à jour l'état pour indiquer que le logement n'a pas été trouvé (=false)
            } else { // Si un logement correspondant est trouvé
                setData(resp.data); // Met à jour les données avec la réponse de la requête
            }
        });
    }, []);

    if (!isFound) { // Si aucun logement n'a été trouvé
        return (<Error404 />);
    }


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
