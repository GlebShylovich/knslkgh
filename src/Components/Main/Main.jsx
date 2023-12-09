import './main.scss'
import { useState, useEffect } from 'react'
import tabData from '../../tabs.json'
import sliderData from '../../slider.json'
import Tab from '../Tab/Tab'
import Basket from '../Basket/Basket'
import Burgers from '../Burgers/Burgers'
import HotDogs from '../HotDogs/HotDogs'
import Snacks from '../Snacks/Snacks'
import Shawarma from '../Shawarma/Shawarma'
import Pizza from '../Pizza/Pizza'
import Deserts from '../Deserts/Deserts'
import Slider from '../Slider/Slider'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {tabArrImg} from '../../picture'

export default function Main() {
    const [arr, setArr] = useState(tabData);
    useEffect(() => {
        addImageToTab();
    },[])
    function addImageToTab() {
        const arrCopy = [...arr]
        const newArrTab = arrCopy.map((item, index) => {
            const obj = {
                ...item,
                image: tabArrImg[index]
            }
            return obj;
        });
        console.log(newArrTab);
        setArr(newArrTab);
    }

    return (
        <Router>
            <div className="page">
                <div className="page__container">
                    <Slider/>
                    <div className="page__categories">
                        {
                            arr.map((item, index) => (
                                <Tab item={item} key={index}  />
                            ))
                        }
                    </div>
                    <div className="page__content">
                        <Basket />
                        <div className="products">
                            <Routes>
                                <Route path='/' element={<Burgers />} />
                                <Route path='/hotdogs' element={<HotDogs />} />
                                <Route path='/snacks' element={<Snacks />} />
                                <Route path='/shawarma' element={<Shawarma />} />
                                <Route path='/pizza' element={<Pizza />} />
                                <Route path='/deserts' element={<Deserts />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}
