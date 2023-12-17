import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import './deserts.scss'
import Modal from '../Modal/Modal';
import { arrDesertImg } from '../../picture'

export default function Deserts({ desertsData }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [arr, setArr] = useState(desertsData);
    const [objModal, setObjModal] = useState({});

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
                image: arrDesertImg[index]
            }
            return obj;
        });
        console.log(newArrCard);
        setArr(newArrCard);
    }
    return (
        <div className="deserts">
            <h1>Deserts</h1>
            <div className="deserts__container">
                {
                    arr.map((item, index) => (
                        <Card item={item} key={index} openModal={openModal} setObjModal={setObjModal} />
                    ))
                }
            </div>
            {isOpenModal && <Modal closeModal={closeModal} content={objModal} />}
        </div>
    )
}