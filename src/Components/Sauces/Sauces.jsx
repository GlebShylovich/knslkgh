import './sauces.scss'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Modal from '../Modal/Modal'

import {arrSaucesImg} from '../../picture'

export default function Sauces({saucesData, addBasket}) {
    const [arr, setArr] = useState(saucesData);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [objModal, setObjModal] = useState({});

    const openModal = () => {
        setIsOpenModal(true);
      };
    
      const closeModal = () => {
        setIsOpenModal(false);
      };

    useEffect(() => {
        addImageToCard();
    },[])
    function addImageToCard() {
        const arrCopy = [...arr]
        const newArrCard = arrCopy.map((item, index) => {
            const obj = {
                ...item,
                image: arrSaucesImg[index]
            }
            return obj;
        });
        console.log(newArrCard);
        setArr(newArrCard);
    }
    return (
        <div className="sauce">
            <h1>Sauces</h1>
            <div className="sauce__container">
                {
                    arr.map((item, index) => (
                        <Card addBasket={addBasket} item={item} key={index} openModal={openModal} setObjModal={setObjModal} />
                    ))
                }
            </div>
            {isOpenModal && <Modal closeModal={closeModal} content={objModal} />}
        </div>
    )
}
