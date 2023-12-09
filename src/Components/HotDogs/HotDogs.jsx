import { useState, useEffect } from 'react'
import data from "../../hotdogs.json"
import Card from '../Card/Card'
import './hotdogs.scss'

import {arrHotdogImg} from '../../picture'

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
                        <Card item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}