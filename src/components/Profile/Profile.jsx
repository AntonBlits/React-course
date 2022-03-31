import React from 'react';
import s from './Profile.module.css';
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {

   return (<div>
      <ProfileInfo />
      <MyPostContainer />
   </div>
   );
}

export default Profile;