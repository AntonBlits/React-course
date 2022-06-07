import React from "react";
import { useForm } from "react-hook-form";

import s from './ProfileInfo.module.css';



const ProfileDataForm = ({ onSubmit, profile }) => {

   const { register, handleSubmit, formState: { errors } } = useForm({
      mode: 'all', defaultValues: {
         fullName: profile.fullName,
         aboutMe: profile.aboutMe,
         lookingForJob: profile.lookingForJob,
         lookingForAJobDescription: profile.lookingForAJobDescription,

      }
   });

   return <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.editInput}>
         <b>full Name:</b>
         <div>
            <input className={s.input}  {...register('fullName', {
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
            <input className={s.input}  {...register('aboutMe', {
               maxLength: {
                  value: 50,
                  message: 'Your input mast have maxLength 50!'
               }
            })} />
            {errors?.aboutMe && <div style={{ color: 'red' }}>{errors.aboutMe.message}</div>}
         </div>
      </div>

      <div className={s.editInput}>
         <b>looking For Job:</b>
         <div>
            <input className={s.input}  {...register('lookingForJob',)} type="checkbox" />
         </div>
      </div>

      <div className={s.editInput}>
         <b>looking For A Job Description:</b>
         <div>
            <input className={s.input}  {...register('lookingForAJobDescription', {
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
                  <input className={s.input}  {...register('contacts.' + key, {
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