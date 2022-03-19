import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';

const MyPost = () => {
   return (
      <div className={s.postsBlock}>
         <h3>My post</h3>
         <div>
            <div> <textarea></textarea>
            </div>
            <div>
               <button>add post</button>
            </div>
         </div>
         <div className={s.posts}>
            <Post message='Hello, my name is Antony' amount='17' />
            <Post message='Hello React developer!' amount='13' />
         </div>
      </div>
   );
}

export default MyPost;