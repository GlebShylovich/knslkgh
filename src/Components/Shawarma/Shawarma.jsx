import { useState, useEffect } from 'react'
import data from "../../shawarma.json"
import Card from '../Card/Card'
import './shawarma.scss'

import {arrShawarmaImg} from '../../picture'

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
                        <Card item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}