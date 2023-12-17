import React from 'react';
import './modal.scss';

export default function Modal({ closeModal, content }) {
  console.log(content);
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal">
        <button className="modal__close" onClick={closeModal}>
          Close
        </button>
        <div className="modal__img">
          <img src={content.image} alt="img" />
        </div>
        <div className="modal__text">
          <p className="modal__text-price">{content.price}</p>
          <p className="modal__text-name">{content.name}</p>
          <p className="modal__text-weight">{content.weight}</p>
        </div>
      </div>
    </div>
  );
}

