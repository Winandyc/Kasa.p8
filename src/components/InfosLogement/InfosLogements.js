import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*
 * @brief : Composant InfosLogement qui affiche les détails d'un logement.
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {Array} props.data - Les données du logement à afficher.
 * @returns {JSX.Element} Le composant InfosLogement rendu.
 *
 * @brief : Génère des étoiles en fonction de la note du logement.
 * @function generateStars
 * @param {number} rating - La note du logement.
 * @returns {JSX.Element[]} Tableau d'éléments JSX représentant les étoiles.
 *
 * @brief : Fonction pour basculer l'état de sélection d'une section.
 * @function toggle
 * @param {string} section - Le nom de la section à basculer.
 * @param {number} index - L'index de la section à basculer.
 * @returns {void}
 */

const InfosLogement = ({ data }) => {
    const { id } = useParams();

    const filteredLogements = data.filter((logement) => logement.id === id);

    const generateStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
                    <FontAwesomeIcon icon={faStar} />
                </span>
            );
        }
        return stars;
    };

    const [selectedSections, setSelectedSections] = useState({
        description: [],
        equipement: [],
    });

    const toggle = (section, index) => {
        setSelectedSections((prevSelected) => {
            const isSelected = prevSelected[section].includes(index);
            const updatedSelected = {
                ...prevSelected,
                [section]: isSelected
                    ? prevSelected[section].filter((item) => item !== index)
                    : [...prevSelected[section], index],
            };
            return updatedSelected;
        });
    };

    return (
        <div>
            {filteredLogements.map((logement) => (
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
                                <li key={`${logement.id}_description_${index}`}>
                                    <div className="title">
                                        <h2>Description</h2>
                                        <img
                                            src="/vectorBas.svg"
                                            alt="Flèche vers le bas"
                                            onClick={() =>
                                                toggle('description', index)
                                            }
                                            className={
                                                selectedSections.description.includes(
                                                    index
                                                )
                                                    ? 'arrowDown'
                                                    : 'arrowUp'
                                            }
                                        />
                                    </div>
                                    <div
                                        className={
                                            selectedSections.description.includes(
                                                index
                                            )
                                                ? 'showInfos'
                                                : 'hiddenInfos'
                                        }
                                    >
                                        <p>{logement.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <ul className="equipement">
                            {filteredLogements.map((logement, index) => (
                                <li key={`${logement.id}_equipment_${index}`}>
                                    <div className="title">
                                        <h2>Equipement</h2>
                                        <img
                                            src="/vectorBas.svg"
                                            alt="Flèche vers le bas"
                                            onClick={() =>
                                                toggle('equipement', index)
                                            }
                                            className={
                                                selectedSections.equipement.includes(
                                                    index
                                                )
                                                    ? 'arrowDown'
                                                    : 'arrowUp'
                                            }
                                        />
                                    </div>
                                    <ul
                                        className={
                                            selectedSections.equipement.includes(
                                                index
                                            )
                                                ? 'showInfos'
                                                : 'hiddenInfos'
                                        }
                                    >
                                        {logement.equipments.map(
                                            (equipment, equipIndex) => (
                                                <li
                                                    key={`${logement.id}_equipment_${equipIndex}`}
                                                >
                                                    {equipment}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfosLogement;
