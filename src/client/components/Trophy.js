import React from 'react';
import PropTypes from 'prop-types';

import '../scss/trophy.scss';
// for webpack
const requestSVGs = require.context('../svg', false, /.svg$/);

const Trophy = ({ trophy, index, openModal }) => (
  <div>
    <div
      onClick={() => openModal(trophy, index)}
      className={`trophy ${!trophy.earned ? 'notEarned' : ''}`}
      // accessibility
      onKeyDown={() => openModal(trophy, index)}
      role="button"
      tabIndex="0"
    >
      <img src={`./svg/${trophy.icon}`} alt={trophy.alt} />
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
