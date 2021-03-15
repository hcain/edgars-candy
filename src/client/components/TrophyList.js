import React from 'react';
import PropTypes from 'prop-types';
import Trophy from './Trophy';
import '../scss/trophyList.scss';

const TrophyList = ({ trophies, openModal }) => (
  <div className="trophyList">
    {trophies.map((trophy, index) => (
      <Trophy
        key={trophy.name}
        trophy={trophy}
        index={index}
        openModal={openModal}
      />
    ))}
  </div>
);

TrophyList.propTypes = {
  trophies: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};
export default TrophyList;
