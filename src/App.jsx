import './App.scss'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import data from './data.json'
import { useState } from 'react'

export default function App() {
  let burgersData = data.burgers;
  let hotdogsData = data.hotDogs;
  let snacksData = data.snacks;
  let shawarmaData = data.shawarmas;
  let pizzasData = data.pizzas;
  let desertsData = data.deserts;
  let saucesData = data.sauces;
  const [basket, setBasket] = useState([]);

  const addBasket = (basketElem) => {
    setBasket(prev => [...prev, { ...basketElem, count: 1 }])
  }

  const plusBasket = (id) => {
    setBasket(prev => prev.map(item => {
      if (item.id === id) {
        return {...item, count: item.count + 1}
      } else {
        return item
      }
    }))
  }

  const minusBasket = (id) => {
    const count = basket.find(item => item.id == id).count
    if (count == 1) {
      setBasket(prev => prev.filter(item => item.id != id))
    } else {
      setBasket(prev => prev.map(item => {
        if (item.id === id) {
          return {...item, count: item.count - 1}
        } else {
          return item
        }
      }))
    }
  }

  return (
    <div className="wrapper">
      <Header />
      <Main plusBasket={plusBasket} minusBasket={minusBasket} addBasket={addBasket} basket={basket} shawarmaData={shawarmaData} saucesData={saucesData} burgersData={burgersData} hotdogsData={hotdogsData} pizzasData={pizzasData} snacksData={snacksData} desertsData={desertsData} />
      <Footer />
    </div>
  )
}