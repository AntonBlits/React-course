import React from "react";
import { useForm } from "react-hook-form";

import s from './ProfileInfo.module.css';



const ProfileDataForm = ({ onSubmit, profile }) => {

   const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

   return <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{profile.fullName}</h1>
      <div className={s.editInput}>
         <b>about me:</b>
         <div>
            <input className={s.input}  {...register('aboutMe', {
               maxLength: {
                  value: 10,
                  message: 'Your input mast have maxLength 10!'
               }
            })} />
            {errors?.aboutMe && <div style={{ color: 'red' }}>{errors.aboutMe.message}</div>}
         </div>
      </div>

      <div className={s.editInput}>
         <b>looking for job:</b>
         <div>
            <input className={s.input}  {...register('lookingforjob',)} type="checkbox" />
         </div>
      </div>

      <div className={s.editInput}>
         <b>looking For A Job Description:</b>
         <div>
            <input className={s.input}  {...register('lookingForAJobDescription', {
               maxLength: {
                  value: 10,
                  message: 'Your input mast have maxLength 10!'
               }
            })} />
            {errors?.lookingForAJobDescription && <div style={{ color: 'red' }}>{errors.lookingForAJobDescription.message}</div>}
         </div>
      </div>

      <div className={s.contacts}>
         <h3>Contacts:</h3>
         {/* {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
         })} */}
      </div>
      <div>
         <button className={s.btn} onClick={() => { }}>save profile</button>
      </div>
   </form>
}

export default ProfileDataForm;