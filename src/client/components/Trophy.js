import React from "react";
import PropTypes from "prop-types";

import sprite from "../svg/sprite.svg";
import "../scss/trophy.scss";


const Trophy = ({ trophy, index, openModal }) => (
    <div>
        <div
            onClick={() => openModal(trophy, index)}
            className={`trophy ${!trophy.earned ? "notEarned" : ""}`}
            // accessibility
            onKeyDown={() => openModal(trophy, index)}
            role="button"
            tabIndex="0"
        >
            <svg role="img" width={70} height={70}>
                <title>{trophy.alt}</title>
                <use href={`${sprite}${trophy.icon}`}></use>
            </svg>
            <div className="text">
                <h3>{trophy.name}</h3>
                <p>{trophy.description}</p>
            </div>
        </div>
    </div>
);

Trophy.propTypes = {
    trophy: PropTypes.shape({
        name: PropTypes.string,
        earned: PropTypes.bool,
        date: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.string,
        alt: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
    openModal: PropTypes.func.isRequired,
};
export default Trophy;
