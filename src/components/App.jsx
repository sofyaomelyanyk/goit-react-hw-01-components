import {Profile} from "./Profile/Profile"
import userInfo from "../components/data/user.json"

export const App = () => {
  return (
    <>
      <Profile
  user = {userInfo} />
    </>
      
   
  );
};
