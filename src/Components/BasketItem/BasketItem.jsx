import './basketitem.scss'

export default function BasketItem() {
    return (
        <div className="basket__item">
            <div className="basket__item-image">
                <img src="./assets/img/basket-item.png" alt="image" />
            </div>
            <div className="basket__item-desc">
                <p className="basket__item-name">Extra Cheese</p>
                <p className="basket__item-weight">512g</p>
                <p className="basket__item-price">8$</p>
            </div>
            <div className="basket__item-amount">
                <span>-</span>
                <p>2</p>
                <span>+</span>
            </div>
        </div>
    )
}
