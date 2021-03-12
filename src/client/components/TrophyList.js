import React from 'react';
import Trophy from './Trophy';
import '../scss/trophyList.scss';

const TrophyList = ({ trophies, openModal }) => (
  <div className="trophyList">
    {trophies &&
      trophies.map((trophy) => (
        <Trophy trophy={trophy} openModal={openModal} />
      ))}
  </div>
);
export default TrophyList;
