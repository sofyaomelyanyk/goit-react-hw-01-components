import propTypes from "prop-types";
import s from './TransactionHistory.module.css'

export const TransactionHistory =({children}) => {
   return <table className={s["transaction-history"]}>{children}</table>
     
   
}

TransactionHistory.propTypes = {
   children: propTypes.node.isRequired,
}

