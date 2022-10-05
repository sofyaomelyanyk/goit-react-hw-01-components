import propTypes from "prop-types";

export const TransactionHistoryBody = ({id, amount, type, currency}) => {
   return( 
       <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
   )
}

TransactionHistoryBody.propTypes = {
   id: propTypes.string, 
   amount: propTypes.string,
   type: propTypes.string,
   currency: propTypes.string,
}