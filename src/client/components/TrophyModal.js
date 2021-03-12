import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import dayjs from 'dayjs';
import '../scss/trophyModal.scss';

const TrophyModal = ({ isOpen, closeModal, selectedTrophy }) => (
  <div className="trophyModal">
    {selectedTrophy ? (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Candy Detail"
        className="modal"
        overlayClassName="overlay"
      >
        <img src={`./svg/${selectedTrophy.icon}`} />
        <div className="text">
          <h2>{selectedTrophy.name}</h2>
          <p className="description">{selectedTrophy.description}</p>
          {selectedTrophy.earned ? (
            <p>
              {`You earned this candy on ${dayjs(selectedTrophy.date).format(
                'MMMM D, YYYY [at] h:mmA'
              )}!`}
            </p>
          ) : (
            <p>You have not earned this candy yet.</p>
          )}
        </div>
        <button onClick={closeModal}>Close</button>
      </Modal>
    ) : (
      ''
    )}
  </div>
);
export default TrophyModal;
