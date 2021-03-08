import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.css';
import ReactImage from './react.png';

export default function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/getUsers");

        setUser(response.data.users[0]);
      
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
    // empty array brackets cause it to only run the first timeaxios('/api/getUsers')
    },[])

    return (
      <div>
        {user ? <h1>{`Hello ${user.firstName}`}</h1> : <h1>Loading... please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
}
