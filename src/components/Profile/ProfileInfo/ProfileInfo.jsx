import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import userphoto from '../../../assets/images/noavatar.png';


const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div>
         <div className={s.image}>
            <img src='https://media.istockphoto.com/photos/extra-wide-evening-panorama-of-business-miami-skyline-picture-id1058108750?b=1&k=20&m=1058108750&s=170667a&w=0&h=YzDzPZd4CXZe1-G_cjL2WIylKsvK2JjgS9MGdQ2uy-Q='></img>
         </div>
         <div>
            {/* <img src='https://www.researchgate.net/publication/353422038/figure/fig2/AS:1048906112700416@1627090113328/Image-7-4-3-2-5-9-3-11-45-3-0-2-4-0-1-7.ppm'></img> */}
         </div>
         <div className={s.discriptionBlock}>
            <div className={s.avatar}>
               <img src={props.profile.photos.large != null ? props.profile.photos.large : userphoto} />
            </div>
            <div className={s.infoAboutMe}>
               <h2>{props.profile.fullName}</h2>
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