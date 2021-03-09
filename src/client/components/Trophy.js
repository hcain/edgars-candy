import React from 'react';
import '../scss/trophy.scss';

export default function Trophy({ trophy }) {
  return (
    <div className="trophy">
      <h3>{trophy.name}</h3>
      <h4>{trophy.description}</h4>
    </div>
  );
}
