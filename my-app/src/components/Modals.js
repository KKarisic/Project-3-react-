import React from "react";
import "../styles/_modals.scss";
import placeholderImg from "../images/placeholder-800x600.png";

const Modals = ({ isOpen, modalContent, closeModal }) => {
  return (
    <div>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <div className="latest-news-category-modal">
              <p>{modalContent.source.id}</p>
            </div>
            <div className="modal-flex">
              <div className="post-img-modal">
                <img
                  src={modalContent.urlToImage || placeholderImg}
                  alt="post image"
                />
              </div>

              <div className="description-model">
                <h3>{modalContent.title}</h3>
                <p>{modalContent.description}</p>
              </div>

              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modals;
