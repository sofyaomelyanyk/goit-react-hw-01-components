
import { Section } from "./Section/Section"
import { Statistics } from "./Statistics/Statistics"
import {Profile} from "./Profile/Profile" 
import { FriendsList } from "./FriendsList/FriendsList"
import { FriendItem } from "./FriendItem/FriendItem"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"
import { TransactionHistoryHeader } from "./TransactionHistoryHeader/TransactionHistoryHeader"
import { TransactionHistoryBody } from "./TransactionHistoryBody/TransactionHistoryBody"


import userInfo from "../components/data/user.json"
import data from "../components/data/data.json"
import friends from "../components/data/friends.json"
import transactionTable from "../components/data/transactions.json"


export const App = () => {
  return (
    <>
      <Profile user = {userInfo} />
      <Section title="UPLOAD STATS">
        {data.map(elem => <Statistics 
            key={elem.id}
            label={elem.label}
            percentage={elem.percentage}/>)}
     </Section>

    
     <FriendsList>
			{friends.map(friend => <FriendItem
				key={friend.id}
				avatar={friend.avatar}
				name={friend.name}
				status={friend.isOnline}
			/>)}
		</FriendsList>

      <TransactionHistory>
      <TransactionHistoryHeader type={"Type"} amount={"Amount"} currency={"Currency"} />
         
         {transactionTable.map(elem => <TransactionHistoryBody
         key={elem.id}
         type={elem.type}
         amount={elem.amount}
         currency={elem.currency} />)}
         
      </TransactionHistory>
      
     
    </>
   
  );
};
