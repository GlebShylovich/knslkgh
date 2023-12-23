import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Modal from '../Modal/Modal';
import './snacks.scss'

import { arrSnackImg } from '../../picture'

export default function Snacks({ snacksData, addBasket }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [objModal, setObjModal] = useState({});
    const [arr, setArr] = useState(snacksData);

    useEffect(() => {
        addImageToCard();
    }, [])
    function addImageToCard() {
        const arrCopy = [...arr]
        const newArrCard = arrCopy.map((item, index) => {
            const obj = {
                ...item,
                image: arrSnackImg[index]
            }
            return obj;
        });
        console.log(newArrCard);
        setArr(newArrCard);
    }

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };
    return (
        <div className="snacks">
            <h1>Snacks</h1>
            <div className="snacks__container">
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