import React from 'react';
import s from './Profile.module.css';
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   return (<div>
      <ProfileInfo profile={props.profile} />
      <MyPostContainer />
   </div>
   );
}

export default Profile;