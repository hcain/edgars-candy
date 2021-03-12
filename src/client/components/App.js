import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/resetStyles.scss';
import '../scss/app.scss';
import Modal from 'react-modal';
import TrophyList from './TrophyList';
import Header from './Header';
import TrophyModal from './TrophyModal';

Modal.setAppElement('#root');

const App = () => {
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
    console.log('purple');
    fetchUsers();
    // empty array brackets cause it to only run the first timeaxios('/api/getUsers')
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const [selectedTrophy, setSelectedTrophy] = useState();

  function openModal(trophy) {
    setSelectedTrophy(trophy);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  console.log('trophy', selectedTrophy);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {user ? (
        <div className="main">
          <Header user={user} />
          <TrophyList
            trophies={user.trophies}
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        </div>
      ) : (
        <h1>Loading... please wait!</h1>
      )}
      <TrophyModal
        isOpen={isOpen}
        closeModal={closeModal}
        selectedTrophy={selectedTrophy}
      />
    </div>
  );
};

export default App;
