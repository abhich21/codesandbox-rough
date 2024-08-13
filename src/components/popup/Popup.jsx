import { useState } from "react";
import "./Popup.css";

export const Popup = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = (event) => {
    if (
      event.target.className === "modal" ||
      event.target.className === "close_button"
    )
      setShowModal(false);
  };

  return (
    <>
      <button onClick={openModal}>open modal</button>
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal_content">
            <h2>This is modal title</h2>
            <p>This is modal content.</p>
            <button className="close_button" onClick={closeModal}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
