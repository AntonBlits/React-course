import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import userphoto from '../../../assets/images/noavatar.png';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = ({ profile, status, updateStatus }) => {

   if (!profile) {
      return <Preloader />
   }
   return (
      <div>
         <div className={s.discriptionBlock}>
            <div className={s.avatar}>
               <img src={profile.photos.large != null ? profile.photos.large : userphoto} />
            </div>
            <div className={s.infoAboutMe}>
               <h1>{profile.fullName}</h1>
               <ProfileStatus status={status} updateStatus={updateStatus} />
               <div className={s.about}>aboutMe: {profile.aboutMe}</div>
               <div className={s.job}>lookingForAJobDescription: {profile.lookingForAJobDescription}</div>
               <div className={s.contacts}>
                  <h3>Contacts:</h3>
                  <div>{profile.contacts.facebook}</div>
                  <div>{profile.contacts.website}</div>
                  <div>{profile.contacts.vk}</div>
                  <div>{profile.contacts.twitter}</div>
                  <div>{profile.contacts.instagram}</div>
                  <div>{profile.contacts.youtube}</div>
                  <div>{profile.contacts.github}</div>
                  <div>{profile.contacts.mainLink}</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProfileInfo;