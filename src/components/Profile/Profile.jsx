import propTypes from "prop-types";
import s from "components/Profile/Profile.module.css"

export const Profile = ({user: {username, tag, location, avatar, stats}}) => {
   return(
      <div className={s['wrap']}>
  <div className={s['description']}>
    <img
      src={avatar}
      alt={username}
      className={s["avatar"]}
    />
    <p className={s["text-name"]}>{username}</p>
    <p className={s["text"]}>@{tag}</p>
    <p className={s["text"]}>{location}</p>
  </div>

  <ul className={s["stats"]}>
    <li className={s["item"]}>
      <span className={s["text"]}>Followers</span>
      <span className={s["text-name"]}>{stats.followers}</span>
    </li>
    <li className={s["item"]}>
      <span className={s["text"]}>Views</span>
      <span className={s["text-name"]}>{stats.views}</span>
    </li>
    <li className={s["item"]}>
      <span className={s["text"]}>Likes</span>
      <span className={s["text-name"]}>{stats.likes}</span>
    </li>
  </ul>
</div>
   )
 
}

Profile.propTypes = {
   user: propTypes.shape({
      username: propTypes.string.isRequired,
      tag: propTypes.string.isRequired,
      location: propTypes.string.isRequired,
      avatar: propTypes.string.isRequired,
      stats: propTypes.shape({
         followers: propTypes.number.isRequired,
         views: propTypes.number.isRequired,
         likes: propTypes.number.isRequired,
      })
   }).isRequired
}