import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';

const MyPost = () => {
   let postData = [
      { id: '1', message: 'Hello, my name is Antony', likesCount: 12 },
      { id: '1', message: 'Hello React developer!', likesCount: 11 },
   ]

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
            <Post message={postData[0].message} amount={postData[0].likesCount} />
            <Post message={postData[1].message} amount={postData[1].likesCount} />
         </div>
      </div>
   );
}

export default MyPost;