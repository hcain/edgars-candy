import React from 'react';

export default function TrophyList({ trophies }) {
  return (
    <div className="TrophyList">
      {trophies && trophies.map((trophy) => <div>{trophy.name}</div>)}
    </div>
  );
}
