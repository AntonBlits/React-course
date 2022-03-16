import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
   return (<div className={s.content}>
      <div>
         <img src='https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg'></img>
      </div>
      <div>
         {/* <img src='https://www.researchgate.net/publication/353422038/figure/fig2/AS:1048906112700416@1627090113328/Image-7-4-3-2-5-9-3-11-45-3-0-2-4-0-1-7.ppm'></img> */}
      </div>
      <div>ava + description</div>
      <div>my post
         <div>new post</div>
         <div>
            <div className={s.item}>post1</div>
            <div className={s.item}>post2</div>
         </div>
      </div>
   </div>

   );
}

export default Profile;