import { useState, useEffect } from 'react'
import data from "../../pizza.json"
import Card from '../Card/Card'
import './pizza.scss'

import {arrPizzaImg} from '../../picture'

export default function Burgers() {
    const [arr, setArr] = useState(data);
    console.log(data);

    useEffect(() => {
        addImageToCard();
    },[])
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
                        <Card item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}