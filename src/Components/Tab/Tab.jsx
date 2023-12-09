import './tab.scss'
import { NavLink } from 'react-router-dom'

export default function Tab(props) {
  console.log(props.item.image);
  return (
    <NavLink to={props.item.path} className="tab">
      <img className="tab__image " src={props.item.image} alt="image" />
      <div className="tab__title">{props.item.name}</div>
    </NavLink>
  )
}
