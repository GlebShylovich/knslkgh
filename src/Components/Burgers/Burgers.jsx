import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import { arrBurgerImg } from '../../picture';
import './burgers.scss';

export default function Burgers({burgersData, addBasket }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [objModal, setObjModal] = useState({});
  const [arr, setArr] = useState(burgersData);

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
          <Card addBasket={addBasket} item={item} key={index} openModal={openModal} setObjModal={setObjModal} />
        ))}
      </div>
      {isOpenModal && <Modal addBasket={addBasket} closeModal={closeModal} content={objModal}/>}
    </div>
  );
}

