import propTypes from "prop-types";
import s from './TransactionHistoryBody.module.css'

export const TransactionHistoryBody = ({id, amount, type, currency}) => {
   return( <tbody className={s['wrap']}>
      <tr className={s['item-list']} key={id}>
      <td className={s['item']}>{type}</td>
      <td className={s['item']}>{amount}</td>
      <td className={s['item']}>{currency}</td>
    </tr>
   </tbody>
       
   )
}

TransactionHistoryBody.propTypes = {
   id: propTypes.string, 
   amount: propTypes.string,
   type: propTypes.string,
   currency: propTypes.string,
}