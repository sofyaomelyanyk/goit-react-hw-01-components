import propTypes from "prop-types";
import {getBgColor} from "../utils/bgColor.js"
import s from './Statistics.module.css'

export const Statistics = ({id, label, percentage}) => {
   return(
  <li style={{
   backgroundColor: getBgColor(),
  }} key={id} className={s['item']}>
      <span className={s['label']}>{label}</span>
      <span className={s['percentage']}>{percentage}%</span>
    </li>
   )
 
}

Statistics.propTypes = {
   id: propTypes.string,
	label: propTypes.string.isRequired,
	percentage: propTypes.number.isRequired,
}


 