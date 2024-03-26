import clsx from "clsx";
import s from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div>
      <div className={clsx(s.wrapper)}>
        <div className={s.user}>
          <img src={image} alt="User avatar" />
          <p className={s.name}>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>

        <ul className={s.list}>
          <li>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
