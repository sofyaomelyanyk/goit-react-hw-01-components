import propTypes from "prop-types";
import s from './FriendsList.module.css'


export const FriendsList = ({ children }) => {
   return (
      <>
        <ul className={s['item-list']}>{children}</ul> 
      </>
      
   )    
   
}

FriendsList.propTypes = {
  children: propTypes.node.isRequired,
}