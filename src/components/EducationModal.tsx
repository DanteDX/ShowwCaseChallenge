import Modal from "react-modal";
import React from "react";

export const EducationModal = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const customStyles = {
    content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    }
  };
  return (
    <div>
      <Modal
        isOpen={modalOpen}
        style={customStyles}
      >
        <p>I am a modal</p>
        <h1>I am a bigger Modal</h1>
        <button onClick={e => setModalOpen(false)}>Close Modal</button>
      </Modal>
      <button onClick={e => setModalOpen(true)}>Open Modal</button>
    </div>
  )
}