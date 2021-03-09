import React from 'react';
import Trophy from './Trophy';
import '../scss/trophyList.scss';

export default function TrophyList({ trophies }) {
  return (
    <div className="trophyList">
      {trophies && trophies.map((trophy) => <Trophy trophy={trophy} />)}
    </div>
  );
}
