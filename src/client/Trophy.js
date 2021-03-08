import React from 'react';

export default function Trophy({ trophy }) {
  return (
    <div className="Trophy">
      <h3>{trophy.name}</h3>
      <h4>{trophy.description}</h4>
    </div>
  );
}
