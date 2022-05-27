import React from 'react';
import s from './Profile.module.css';
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = ({ profile, status, updateStatus }) => {
   return (<div>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
      <MyPostContainer />
   </div>
   );
}

export default Profile;