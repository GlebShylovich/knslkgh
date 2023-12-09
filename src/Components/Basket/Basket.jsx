import './basket.scss'
import BasketItem from '../BasketItem/BasketItem'

export default function Basket() {
  return (
    <div className="basket">
        <div className="basket__top">
            <div className="basket__title">Basket</div>
            <div className="basket__amount">6</div>
        </div>
        <div className="basket__list">
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
        </div>
        <div className="basket__total">
            <p className="basket__total-text">Total</p>
            <p className="basket__total-price">48$</p>
        </div>
        <button className="basket__btn">Make an order</button>
        <div className="basket__delivery">
            <div className="basket_delivery-img">
                <img src="../img/basket-delivery.png" alt="image" />
            </div>
            <div className="basket__delivery-text">Free delivery</div>
        </div>
    </div>
  )
}
