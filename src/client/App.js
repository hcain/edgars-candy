import React, { useState, useEffect } from 'react';
import axios from 'axios';
import humanizeDuration from 'humanize-duration';
import './app.css';
import TrophyList from './TrophyList';

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/getUsers');

        setUser(response.data.users[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
    // empty array brackets cause it to only run the first timeaxios('/api/getUsers')
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>{`${user.firstName}'s Trophies!`}</h1>
          <p>{`You've read ${user.stories} stories in ${humanizeDuration(
            user.time
          )}`}</p>
          <TrophyList trophies={user.trophies} />
        </div>
      ) : (
        <h1>Loading... please wait!</h1>
      )}
    </div>
  );
}
