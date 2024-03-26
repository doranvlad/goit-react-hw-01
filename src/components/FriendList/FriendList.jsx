import s from "./FriendList.module.css";
import clsx from "clsx";
import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={s.wrapper}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={s.item}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
