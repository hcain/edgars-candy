import React from 'react';
import humanizeDuration from 'humanize-duration';
import PumpkinImage from '../svg/011-candies-2.svg';
import '../scss/header.scss';

const Header = ({ user }) => (
  <div className="header">
    <div>
      <h1>{`${user.firstName}'s Candy`}</h1>
      <h2>
        {`You've read ${user.stories} stories in ${humanizeDuration(
          user.time
        )}!`}
      </h2>
    </div>
    <img src={`./svg/${PumpkinImage}`} />
  </div>
);

export default Header;
