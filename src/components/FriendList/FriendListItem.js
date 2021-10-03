import PropTypes from 'prop-types';
import styles from './friendList.module.css';


const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (<li class={styles.item} key={id}>
        <span class={
            isOnline ? styles.statusOnline : styles.statusOffline
          }></span>
        <img class={styles.avatar} src={avatar} alt={name} width="48" />
        <p class={styles.name}>{name}</p>
    </li>);
};


FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendListItem;