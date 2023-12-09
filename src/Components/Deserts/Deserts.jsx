import { useState, useEffect } from 'react'
import data from "../../deserts.json"
import Card from '../Card/Card'
import './deserts.scss'

import {arrDesertImg} from '../../picture'

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
                        <Card item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}