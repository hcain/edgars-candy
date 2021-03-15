import React from 'react';
import PropTypes from 'prop-types';
import humanizeDuration from 'humanize-duration';
// for webpack
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
    <img
      src={`./svg/${PumpkinImage}`}
      alt="Jack-O'-Lantern filled with candy"
    />
  </div>
);

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    trophies: PropTypes.arrayOf(PropTypes.object),
    stories: PropTypes.number,
    time: PropTypes.number,
  }).isRequired,
};

export default Header;
