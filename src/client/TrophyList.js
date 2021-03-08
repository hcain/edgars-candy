import React from 'react';
import Trophy from './Trophy';

export default function TrophyList({ trophies }) {
  return (
    <div className="TrophyList">
      {trophies && trophies.map((trophy) => <Trophy trophy={trophy} />)}
    </div>
  );
}
