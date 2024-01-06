import './basket.scss'
import BasketItem from '../BasketItem/BasketItem';
import scooter from '../../assets/img/basket-delivery.png'

export default function Basket({ basket, plusBasket, minusBasket }) {
    const total = basket.reduce((acc, item) => acc + item.price * item.count, 0);
    return (
        <div className="basket">
            <div className="basket__top">
                <div className="basket__title">Basket</div>
                <div className="basket__amount">{basket.length}</div>
            </div>
            <div className="basket__list">
                {
                    basket.map((item, index) => (
                        <BasketItem key={index} item={item} minusBasket={minusBasket} plusBasket={plusBasket}/>
                    ))
                }
            </div>
            <div className="basket__total">
                <p className="basket__total-text">Total</p>
                <p className="basket__total-price">{total}$</p>
            </div>
            <button className="basket__btn">Make an order</button>
            <div className="basket__delivery">
                <div className="basket_delivery-img">
                    <img src={scooter} alt="image" />
                </div>
                <div className="basket__delivery-text">Free delivery</div>
            </div>
        </div>
    )
}
