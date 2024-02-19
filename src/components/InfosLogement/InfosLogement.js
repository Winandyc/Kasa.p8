import React from 'react';
import { useParams } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExpansionPanel from '../ExpansionPanel';

const InfosLogement = ({ data }) => { // data représente les données qui seront utilisées pour afficher les informations sur le logement.
    const { id } = useParams(); // Utilisation du hook useParams pour extraire la valeur de l'id de l'URL.

    const filteredLogements = data.filter((logement) => logement.id === id); // Je filtre les données (data) de logements en fonction de l'id extrait
    // de l'URL. Je ne garde que les logements dont l'id correspont à celui extrait de l'URL juste au-dessus, avec useParams.

    const generateStars = (rating) => { // fonction qui génère des éléments <span> représentant les étoiles d'évaluation en fonction d'une note donnée.
        const stars = [];
        for (let i = 1; i <= 5; i++) { // boucle for qui itère de 1 à 5 (pour une note de 1 à 5 étoiles).
            stars.push( // à chaque itération de ma boucle, un nouvel élément span est créé et ajouté au tableau stars.
                <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
                    <FontAwesomeIcon icon={faStar} />
                </span>
            );
        }
        return stars;
    };

    return (
        <div>
            {filteredLogements.map((logement) => ( // Utilisation de la méthode ".map()" sur le tableau "filteredLogements" pour parcourir chaque
            // éléments du tableau et générer les données du logement filtré.
                <div className="containerInfosCollapse" key={logement.id}>
                    <div className="containerInfos">
                        <div className="containerTitleLocationTag">
                            <h2>{logement.title}</h2>
                            <p>{logement.location}</p>
                            <ul>
                                {logement.tags.map((tag, index) => (
                                    <li key={`${logement.id}_tag_${index}`}>
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="containerRatingHost">
                            <div className="host">
                                <p>{logement.host.name}</p>
                                <img
                                    src={logement.host.picture}
                                    alt={logement.host.name}
                                />
                            </div>
                            <div className="rating">
                                <div className="stars">
                                    {generateStars(logement.rating)}
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="containerCollapseLogement">
                        <ul className="description">
                            {filteredLogements.map((logement, index) => (
                                <ExpansionPanel title="Description" key={`${logement.id}_description_${index}`}>
                                    <p>{logement.description}</p>
                                </ExpansionPanel>
                            ))}
                        </ul>

                        <ul className="equipements">
                            {filteredLogements.map((logement, index) => (
                                <ExpansionPanel title="Equipements" key={`${logement.id}_equipment_${index}`}>
                                    <ul>
                                        {logement.equipments.map(
                                            (equipment, equipIndex) => (
                                                <li key={`${logement.id}_equipments_${equipIndex}`}>
                                                    {equipment}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </ExpansionPanel>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfosLogement;
