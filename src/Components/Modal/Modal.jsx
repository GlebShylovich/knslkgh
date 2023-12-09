import React from 'react';
import './modal.scss';

export default function Modal({ closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal">
        <button className="modal__close" onClick={closeModal}>
          Close
        </button>
        <p>Modal</p>
      </div>
    </div>
  );
}

