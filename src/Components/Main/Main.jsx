import './main.scss'
import { useState, useEffect } from 'react'
import tabData from '../../tabs.json'
import Tab from '../Tab/Tab'
import Basket from '../Basket/Basket'
import Burgers from '../Burgers/Burgers'
import HotDogs from '../HotDogs/HotDogs'
import Snacks from '../Snacks/Snacks'
import Shawarma from '../Shawarma/Shawarma'
import Pizza from '../Pizza/Pizza'
import Deserts from '../Deserts/Deserts'
import Slider from '../Slider/Slider'
import Sauces from '../Sauces/Sauces'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { tabArrImg } from '../../picture'

export default function Main({ burgersData, hotdogsData, snacksData, shawarmaData, pizzasData, desertsData, saucesData, basket, addBasket, plusBasket, minusBasket }) {
    const [arr, setArr] = useState(tabData);
    useEffect(() => {
        addImageToTab();
    }, [])
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
                    <Slider />
                    <div className="page__categories">
                        {
                            arr.map((item, index) => (
                                <Tab item={item} key={index} />
                            ))
                        }
                    </div>
                    <div className="page__content">
                        <Basket basket={basket} plusBasket={plusBasket} minusBasket={minusBasket}/>
                        <div className="products">
                            <Routes>
                                <Route path='/' element={<Burgers addBasket={addBasket} burgersData={burgersData} />} />
                                <Route path='/hotdogs' element={<HotDogs addBasket={addBasket} hotdogsData={hotdogsData} />} />
                                <Route path='/snacks' element={<Snacks addBasket={addBasket} snacksData={snacksData} />} />
                                <Route path='/shawarma' element={<Shawarma addBasket={addBasket} shawarmaData={shawarmaData} />} />
                                <Route path='/pizza' element={<Pizza addBasket={addBasket} pizzasData={pizzasData} />} />
                                <Route path='/deserts' element={<Deserts addBasket={addBasket} desertsData={desertsData} />} />
                                <Route path='/sauces' element={<Sauces addBasket={addBasket} saucesData={saucesData} />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}
