import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

/*
 * @brief : Composant Carrousel qui affiche un diaporama d'images.
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {Array} props.data - Les données du diaporama contenant les informations sur les logements.
 * @returns {JSX.Element | undefined} Le composant Carrousel rendu ou undefined si les données sont invalides.
 *
 * @brief : Fonction pour passer à la diapositive suivante.
 * @function nextSlide
 *
 * @brief : Fonction pour passer à la diapositive précédente.
 * @function prevSlide
 */

const Carroussel = ({ data }) => {
    const { id } = useParams();

    const [currentSlide, setCurrentSlide] = useState(0);

    const filteredLogements = data.filter((logement) => logement.id === id);

    if (
        filteredLogements.length === 0 ||
        !filteredLogements[0].pictures ||
        !filteredLogements[0].pictures.length
    ) {
        return;
    }

    const totalSlides = filteredLogements[0].pictures.length;
    const showCounterButtons = totalSlides > 1;

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
        );
    };

    return (
        <div className="carrouselContainer">
            {showCounterButtons && (
                <div className="carrouselCounter">
                    {currentSlide + 1}/{totalSlides}
                </div>
            )}
            <div key={filteredLogements[0].id} className="carrouselSlide">
                {showCounterButtons && (
                    <button
                        className="carrouselButton carrouselPrev"
                        onClick={prevSlide}
                        alt="Précédente"
                    ></button>
                )}
                <div className="carrouselImageContainer">
                    <img
                        src={filteredLogements[0].pictures[currentSlide]}
                        alt=""
                        className="carrouselImage"
                    />
                </div>
                {showCounterButtons && (
                    <button
                        className="carrouselButton carrouselNext"
                        onClick={nextSlide}
                    ></button>
                )}
            </div>
        </div>
    );
};

export default Carroussel;
