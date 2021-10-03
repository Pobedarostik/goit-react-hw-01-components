import FriendListItem from "./FriendListItem";
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
return (<ul class={styles.friend_list} >
        {friends.map(friend => ( 
            <FriendListItem
            key={friend.id}
            isOnline={friend.isOnline}
        avatar={friend.avatar}
        name={friend.name}
    />
        
    ))}
  </ul>)
}

export default FriendList;

