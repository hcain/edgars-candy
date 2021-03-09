import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/resetStyles.scss';
import '../scss/app.scss';
import TrophyList from './TrophyList';
import Header from './Header';

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
          <Header user={user} />
          <TrophyList trophies={user.trophies} />
        </div>
      ) : (
        <h1>Loading... please wait!</h1>
      )}
    </div>
  );
}
