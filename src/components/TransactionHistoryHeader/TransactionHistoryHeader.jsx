import propTypes from "prop-types";

export const TransactionHistoryHeader = ({ type, amount, currency}) => {
   return(
    <tr>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  )
}

TransactionHistoryHeader.propTypes = {
   amount: propTypes.string,
   type: propTypes.string,
   currency: propTypes.string,
}