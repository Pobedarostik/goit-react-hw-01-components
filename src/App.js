import Profile from "./components/Profile/Profile";
import user from "./user.json"
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./statistical-data.json";
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from './transactions.json'


export default function App() {
    return (<>
    <Profile
        key={user.name}
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions}/>
        </>)

}
