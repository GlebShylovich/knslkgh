import './App.scss'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

import burgersData from './burgers.json'
import hotdogsData from './hotdogs.json'
import pizzasData from './pizza.json'
import snacksData from './snacks.json'
import desertsData from './deserts.json'
import saucesData from './sauces.json'
import shawarmaData from './shawarma.json'

export default function App() {

  return (
    <div className="wrapper">
      <Header />
      <Main shawarmaData={shawarmaData} saucesData={saucesData} burgersData={burgersData} hotdogsData={hotdogsData} pizzasData={pizzasData} snacksData={snacksData} desertsData={desertsData}/>
      <Footer />
    </div>
  )
}