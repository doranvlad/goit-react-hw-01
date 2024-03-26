import s from "./FriendListItem.module.css";
import clsx from "clsx";

function FriendListItem({ friend }) {
  return (
    <div className={s.itemWrapper}>
      <img src={friend.avatar} alt={friend.name} width="48" />
      <p className={s.name}>{friend.name}</p>
      <p className={clsx(friend.isOnline ? s.green : s.red)}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
