import { useState ,useEffect } from 'react'
import Card from '../Card/Card'
import './snacks.scss'

import {arrSnackImg} from '../../picture'

export default function Snacks({snacksData}) {
    const [arr, setArr] = useState(snacksData);
    console.log(data);

    useEffect(() => {
        addImageToCard();
    },[])
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
    return (
        <div className="snacks">
            <h1>Snacks</h1>
            <div className="snacks__container">
                {
                    arr.map((item, index) => (
                        <Card item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}