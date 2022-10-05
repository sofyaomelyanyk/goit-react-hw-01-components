import propTypes from "prop-types";

export const Profile = ({user: {username, tag, location, avatar, stats}}) => {
   return(
      <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt={username}
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
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