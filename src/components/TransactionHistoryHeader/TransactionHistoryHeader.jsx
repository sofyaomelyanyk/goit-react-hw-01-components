import propTypes from "prop-types";
import s from './TransactionHistoryHeader.module.css'

export const TransactionHistoryHeader = ({ type, amount, currency}) => {
   return(<thead className={s['wrap']}>
      <tr className={s['item-list']}>
      <th className={s['item']}>{type}</th>
      <th className={s['item']}>{amount}</th>
      <th className={s['item']}>{currency}</th>
    </tr>
   </thead>
    
  )
}

TransactionHistoryHeader.propTypes = {
   amount: propTypes.string,
   type: propTypes.string,
   currency: propTypes.string,
}