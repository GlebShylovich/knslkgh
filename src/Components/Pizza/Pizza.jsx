import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Modal from '../Modal/Modal';
import './pizza.scss'

import { arrPizzaImg } from '../../picture'

export default function Pizzas({ pizzasData, addBasket }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [objModal, setObjModal] = useState({});
    const [arr, setArr] = useState(pizzasData);

    const openModal = () => {
        setIsOpenModal(true);
      };
    
      const closeModal = () => {
        setIsOpenModal(false);
      };

    useEffect(() => {
        addImageToCard();
    }, [])
    function addImageToCard() {
        const arrCopy = [...arr]
        const newArrCard = arrCopy.map((item, index) => {
            const obj = {
                ...item,
                image: arrPizzaImg[index]
            }
            return obj;
        });
        console.log(newArrCard);
        setArr(newArrCard);
    }
    return (
        <div className="pizza">
            <h1>Pizza</h1>
            <div className="pizza__container">
                {
                    arr.map((item, index) => (
                        <Card addBasket={addBasket} item={item} key={index} openModal={openModal} setObjModal={setObjModal} />
                    ))
                }
            </div>
            {isOpenModal && <Modal closeModal={closeModal}  content={objModal}/>}
        </div>
    )
}