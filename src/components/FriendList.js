import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
return (<ul className="friend-list" >
        {friends.map(friend => ( 
            <FriendListItem
                key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
    />
        
    ))}
  </ul>)
}

export default FriendList;

