import React from "react";
import { useForm } from "react-hook-form";

import s from './ProfileInfo.module.css';



const ProfileDataForm = ({ onSubmit, profile }) => {
   const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

   return <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.editInput}>
         <b>full Name:</b>
         <div>
            <input className={s.input} defaultValue={profile.fullName}  {...register('fullName', {
               maxLength: {
                  value: 30,
                  message: 'Your input mast have maxLength 30!'
               }
            })} />
            {errors?.fullName && <div style={{ color: 'red' }}>{errors.fullName.message}</div>}
         </div>
      </div>

      <div className={s.editInput}>
         <b>about Me:</b>
         <div>
            <input className={s.input} defaultValue={profile.aboutMe}  {...register('aboutMe', {
               maxLength: {
                  value: 50,
                  message: 'Your input mast have maxLength 50!'
               }
            })} />
            {errors?.aboutMe && <div style={{ color: 'red' }}>{errors.aboutMe.message}</div>}
         </div>
      </div>

      <div className={s.editInput}>
         <b>looking For A Job:</b>
         <div>
            <input className={s.input} {...register('lookingForAJob',)} type="checkbox" />
         </div>
      </div>

      <div className={s.editInput}>
         <b>looking For A Job Description:</b>
         <div>
            <input className={s.input} defaultValue={profile.lookingForAJobDescription}  {...register('lookingForAJobDescription', {
               maxLength: {
                  value: 30,
                  message: 'Your input mast have maxLength 30!'
               }
            })} />
            {errors?.lookingForAJobDescription && <div style={{ color: 'red' }}>{errors.lookingForAJobDescription.message}</div>}
         </div>
      </div>

      <div className={s.contacts}>
         <h3>Contacts:</h3>
         {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.editInput + ' ' + s.contactInput}>
               <b>{key}:</b>
               <div>
                  <input className={s.input} defaultValue={profile.contacts[key]}  {...register('contacts.' + key, {
                     maxLength: {
                        value: 100,
                        message: 'Your input mast have maxLength 100!'
                     }
                  })} />
               </div>
            </div>
         })}
      </div>
      <div>
         <button className={s.btn}>save profile</button>
      </div>
   </form>


}

export default ProfileDataForm;