import { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import Card from '../Card/Card'
import './hotdogs.scss'

import { arrHotdogImg } from '../../picture'

export default function HotDogs({ hotdogsData, addBasket }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [objModal, setObjModal] = useState({});
    const [arr, setArr] = useState(hotdogsData);

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
                image: arrHotdogImg[index]
            }
            return obj;
        });
        console.log(newArrCard);
        setArr(newArrCard);
    }
    return (
        <div className="hotdogs">
            <h1>Hot dogs</h1>
            <div className="hotdogs__container">
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