import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import dayjs from 'dayjs';
import '../scss/trophyModal.scss';

const TrophyModal = (props) => {
  const {
    isOpen,
    closeModal,
    selectedTrophy,
    logStudentFinishedReading,
  } = props;

  return (
    <>
      {selectedTrophy ? (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Candy Detail"
          className="modal"
          overlayClassName="overlay"
        >
          <img src={`./svg/${selectedTrophy.icon}`} alt={selectedTrophy.alt} />
          <div className="text">
            <h2>{selectedTrophy.name}</h2>
            <p className="description">{selectedTrophy.description}</p>
            {/* has user earned this candy yet? */}
            {selectedTrophy.earned ? (
              // if yes, display when it was earned
              <p>
                {`You earned this candy on ${dayjs(selectedTrophy.date).format(
                  'MMMM D, YYYY [at] h:mmA'
                )}!`}
              </p>
            ) : (
              // if not, display not earned message and button to make earned = true when clicked
              <>
                <p>You have not earned this candy yet.</p>
                {/* addTrophy makes earned = true and sets current time/date when earned */}
                <button type="button" onClick={logStudentFinishedReading}>
                  Add this candy to your haul!
                </button>
              </>
            )}
          </div>
          {/* close modal button */}
          <button type="button" className="close" onClick={closeModal}>
            Close
          </button>
        </Modal>
      ) : (
        ''
      )}
    </>
  );
};

TrophyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  selectedTrophy: PropTypes.shape({
    name: PropTypes.string,
    earned: PropTypes.bool,
    date: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    alt: PropTypes.string,
  }),
  logStudentFinishedReading: PropTypes.func.isRequired,
};
export default TrophyModal;
