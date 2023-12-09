import './card.scss'

export default function Card(props, openModal) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.item.image} alt="img" />
      </div>
      <div className="card__text">
        <p className="card__text-price">{props.item.price}</p>
        <p className="card__text-name">{props.item.name}</p>
        <p className="card__text-weight">{props.item.weight}</p>
        <button className="card__text-btn" onClick={() => openModal}>Add to basket</button>
      </div>
    </div>
  )
}
