import './card.scss'

export default function Card({ item, openModal }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={item.image} alt="img" />
      </div>
      <div className="card__text">
        <p className="card__text-price">{item.price}</p>
        <p className="card__text-name">{item.name}</p>
        <p className="card__text-weight">{item.weight}</p>
        <button className="card__text-btn" onClick={() => openModal}>Add to basket</button>
      </div>
    </div>
  )
}
