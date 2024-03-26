import s from "./FriendListItem.module.css";
import clsx from "clsx";

function FriendListItem({ friends }) {
  return (
    <ul className={s.wrapper}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={s.item}>
            <div className={s.itemWrapper}>
              <img src={friend.avatar} alt={friend.name} width="48" />
              <p className={s.name}>{friend.name}</p>
              <p className={clsx(friend.isOnline ? s.green : s.red)}>
                {friend.isOnline ? "Online" : "Offline"}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default FriendListItem;
