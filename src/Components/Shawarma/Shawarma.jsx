import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Modal from '../Modal/Modal';
import './shawarma.scss'

import { arrShawarmaImg } from '../../picture'

export default function Shawarma({ shawarmaData, addBasket }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [objModal, setObjModal] = useState({});
    const [arr, setArr] = useState(shawarmaData);

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
                image: arrShawarmaImg[index]
            }
            return obj;
        });
        console.log(newArrCard);
        setArr(newArrCard);
    }
    return (
        <div className="shawarma">
            <h1>Shawarma</h1>
            <div className="shawarma__container">
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