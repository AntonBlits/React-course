import React from 'react';
import s from './Profile.module.css';
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
   return (<div>
      <ProfileInfo profile={profile} status={status}
         updateStatus={updateStatus} isOwner={isOwner}
         savePhoto={savePhoto} saveProfile={saveProfile} />
      <MyPostContainer />
   </div>
   );
}

export default Profile;