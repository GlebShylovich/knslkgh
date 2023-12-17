import './sauces.scss'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'

import {arrSaucesImg} from '../../picture'

export default function Sauces({saucesData}) {
    const [arr, setArr] = useState(saucesData);
    console.log(data);

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
                        <Card item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
