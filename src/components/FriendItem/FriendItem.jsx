import propTypes from "prop-types";
import s from './FriendItem.module.css'

export const FriendItem = ({id, avatar, name, status}) => {
   return (
      <li className={s['item']} key={id}>
        <span className={status ? s['status'] : s['status-offline']}></span>
        <img className={s['avatar']} src={avatar} alt={name} width="48" />
        <p className={s['name']}>{name}</p>
      </li>
   )
}

FriendItem.propTypes = {
   id: propTypes.number,
   avatar: propTypes.string,
   name: propTypes.string,
   status: propTypes.bool,
}