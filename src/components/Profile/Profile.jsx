import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div className={css.profile}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={css.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
