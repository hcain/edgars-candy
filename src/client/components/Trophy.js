import React, { useState } from 'react';
import '../scss/trophy.scss';

const requestSVGs = require.context('../svg', false, /.svg$/);

const Trophy = ({ trophy, openModal }) => (
  // console.log(trophy);
  <div>
    <div
      onClick={() => openModal(trophy)}
      className={`trophy ${!trophy.earned ? 'notEarned' : ''}`}
    >
      <img src={`./svg/${trophy.icon}`} />
      <div className="text">
        <h3>{trophy.name}</h3>
        <p>{trophy.description}</p>
      </div>
    </div>
    x
  </div>
);
export default Trophy;
