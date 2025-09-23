import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import Header from './Header';
import TrophyList from './TrophyList';
import Footer from './Footer';
import TrophyModal from './TrophyModal';

// reset stylesheet helps with uniformity across different browsers
import '../scss/resetStyles.scss';
import '../scss/app.scss';

// for webpack
import PumpkinLollipop from '../svg/002-lollipop.svg';
// for modal accessibility
Modal.setAppElement('#root');

const App = () => {
  // USER LOGIC
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
    // empty array brackets cause it to only run the first time
  }, []);

  // MODAL LOGIC
  const [isOpen, setIsOpen] = useState(false);

  const [selectedTrophy, setSelectedTrophy] = useState({});

  const openModal = (trophy, index) => {
    // pass clicked on trophy to modal
    setSelectedTrophy({ trophy, index });
    // open the modal
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // update a trophy to earned = true when the "add trophy" button in the modal is clicked
  const logStudentFinishedReading = () => {
    // update the trophy within the user object
    setUser({
      ...user,
      // update the trophies property
      trophies: [
        // dont change the trophies before updated trophy
        ...user.trophies.slice(0, selectedTrophy.index),
        // update selected trophy
        {
          // rest of trophy properties stay the same
          ...user.trophies[selectedTrophy.index],
          // trophy is now earned
          earned: true,
          // add date when earned
          date: new Date().toISOString(),
        },
        // don't change the trophies after updated trophy
        ...user.trophies.slice(selectedTrophy.index + 1),
      ],
    });
    // close the modal
    closeModal();
  };

  return (
    <React.StrictMode>
      <div className="app">
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
          <div className="loading">
            {/* extra div fixes flexbox vertical centering issue */}
            <div className="text">
              <div className="firstRow">
                <h1>Loading</h1>
                <img
                  src={`./svg/${PumpkinLollipop}`}
                  // TODO: alt is showing before image finishes loading
                  // alt="Jack-O'-Lantern filled with candy"
                />
              </div>
              <h1>please wait!</h1>
            </div>
          </div>
        )}
        <Footer />
        <TrophyModal
          isOpen={isOpen}
          closeModal={closeModal}
          selectedTrophy={selectedTrophy.trophy}
          logStudentFinishedReading={logStudentFinishedReading}
        />
      </div>
    </React.StrictMode>
  );
};

export default App;
