import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
      <div>
         <div className={s.image}>
            <img src='https://media.istockphoto.com/photos/extra-wide-evening-panorama-of-business-miami-skyline-picture-id1058108750?b=1&k=20&m=1058108750&s=170667a&w=0&h=YzDzPZd4CXZe1-G_cjL2WIylKsvK2JjgS9MGdQ2uy-Q='></img>
         </div>
         <div>
            {/* <img src='https://www.researchgate.net/publication/353422038/figure/fig2/AS:1048906112700416@1627090113328/Image-7-4-3-2-5-9-3-11-45-3-0-2-4-0-1-7.ppm'></img> */}
         </div>
         <div className={s.discriptionBlock}>ava + description</div>
      </div>
   );
}

export default ProfileInfo;