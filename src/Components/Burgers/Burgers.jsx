// Burgers.jsx
import React, { useState, useEffect } from 'react';
import data from '../../burgers.json';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import { arrBurgerImg } from '../../picture';
import './burgers.scss';

export default function Burgers() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [arr, setArr] = useState(data);

  useEffect(() => {
    addImageToCard();
  }, []);

  function addImageToCard() {
    const arrCopy = [...arr];
    const newArrCard = arrCopy.map((item, index) => ({
      ...item,
      image: arrBurgerImg[index],
    }));
    setArr(newArrCard);
  }

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="burgers">
      <h1>Burgers</h1>
      <div className="burgers__container">
        {arr.map((item, index) => (
          <Card item={item} key={index} openModal={openModal} />
        ))}
      </div>
      {isOpenModal && <Modal closeModal={closeModal} />}
    </div>
  );
}

