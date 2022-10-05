import propTypes from "prop-types";

export const Statistics = ({id, label, percentage}) => {
   return(
   
  
  <li key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  
    
   
 

   )
 
}

Statistics.propTypes = {
   id: propTypes.string,
	label: propTypes.string.isRequired,
	percentage: propTypes.number.isRequired,
}


 