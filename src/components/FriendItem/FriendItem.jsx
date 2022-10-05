import propTypes from "prop-types";

export const FriendItem = ({id, avatar, name, status}) => {
   return (
      <li key={id}>
        <span className="status">{status}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
   )
}

FriendItem.propTypes = {
   id: propTypes.number,
   avatar: propTypes.string,
   name: propTypes.string,
   status: propTypes.bool,
}