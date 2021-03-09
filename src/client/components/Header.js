import React from 'react';
import humanizeDuration from 'humanize-duration';
import '../scss/header.scss';

export default function Header({ user }) {
  return (
    <div className="header">
      <h1>{`${user.firstName}'s Trophies!`}</h1>
      <p>
        {`You've read ${user.stories} stories in ${humanizeDuration(
          user.time
        )}`}
      </p>
    </div>
  );
}
