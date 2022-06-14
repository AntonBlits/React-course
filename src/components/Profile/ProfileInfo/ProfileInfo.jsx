import React, { useState } from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import userphoto from '../../../assets/images/noavatar.png';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

   const [editMode, setEditMode] = useState(false)

   if (!profile) {
      return <Preloader />
   }

   const onMainPhotoSelector = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0]);
      }
   }

   const onSubmit = (dataForm) => {
      saveProfile(dataForm);
      setEditMode(false);
   }

   return (
      <div>
         <div className={s.discriptionBlock}>
            <div className={s.avatar}>
               <img src={profile.photos.large || userphoto} />
               {isOwner && <input className={s.editPhoto} type="file" onChange={onMainPhotoSelector} />}
            </div>
            <div className={s.infoAboutMe}>
               <ProfileStatus status={status} updateStatus={updateStatus} />
               {editMode ? <ProfileDataForm profile={profile} onSubmit={onSubmit} goToEditMode={setEditMode} />
                  : <ProfileData profile={profile} isOwner={isOwner}
                     goToEditMode={() => setEditMode(true)} />
               }
            </div>
         </div>
      </div>
   );
}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
   return <div>
      <h1>{profile.fullName}</h1>
      {profile.aboutMe && <div><b>about Me:</b> {profile.aboutMe}</div>}
      <div><b>looking For A Job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
      {profile.lookingForAJobDescription && <div ><b>looking For A Job Description:</b> {profile.lookingForAJobDescription}</div>}
      <div className={s.contacts}>
         <h3>Contacts:</h3>
         {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
         })}
      </div>
      <div>
         {isOwner && <button className={s.btn} onClick={goToEditMode}>edit profile</button>}
      </div>
   </div>
}
const Contact = ({ contactTitle, contactValue }) => {
   return <div className={s.contact}><b>{contactTitle}</b> : {contactValue}</div>
}

export default ProfileInfo;
