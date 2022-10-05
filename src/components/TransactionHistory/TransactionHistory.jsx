import propTypes from "prop-types";

export const TransactionHistory =({children}) => {
   return <table className="transaction-history">{children}</table>
     
   
}

TransactionHistory.propTypes = {
   children: propTypes.node.isRequired,
}

