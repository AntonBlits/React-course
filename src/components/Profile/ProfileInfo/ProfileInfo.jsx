import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import userphoto from '../../../assets/images/noavatar.png';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {

   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div>
         <div className={s.discriptionBlock}>
            <div className={s.avatar}>
               <img src={props.profile.photos.large != null ? props.profile.photos.large : userphoto} />
            </div>
            <div className={s.infoAboutMe}>
               <h1>{props.profile.fullName}</h1>
               <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
               <div className={s.about}>aboutMe: {props.profile.aboutMe}</div>
               <div className={s.job}>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
               <div className={s.contacts}>
                  <h3>Contacts:</h3>
                  <div>{props.profile.contacts.facebook}</div>
                  <div>{props.profile.contacts.website}</div>
                  <div>{props.profile.contacts.vk}</div>
                  <div>{props.profile.contacts.twitter}</div>
                  <div>{props.profile.contacts.instagram}</div>
                  <div>{props.profile.contacts.youtube}</div>
                  <div>{props.profile.contacts.github}</div>
                  <div>{props.profile.contacts.mainLink}</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProfileInfo;