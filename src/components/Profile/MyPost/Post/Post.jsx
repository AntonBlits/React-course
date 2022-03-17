import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   return (
      <div className={s.item}>
         <img src="http://img2.joyreactor.cc/pics/post/full/%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-art-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-5007944.jpeg" alt="#" />
         <div>
            <span>{props.message}</span>
         </div>
         <div>
            <span>like </span>{props.amount}
         </div>


      </div>
   );
}

export default Post;