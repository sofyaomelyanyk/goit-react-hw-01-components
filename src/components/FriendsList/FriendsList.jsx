import propTypes from "prop-types";


export const FriendsList = ({ children }) => {
   return (
      <>
        <ul>{children}</ul> 
      </>
      
   )    
   
}

FriendsList.propTypes = {
  children: propTypes.node.isRequired,
}