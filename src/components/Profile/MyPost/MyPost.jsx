import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';

const MyPost = () => {
   let posts = [
      { id: '1', message: 'Hello, my name is Antony', likesCount: 12 },
      { id: '2', message: 'Hello React developer!', likesCount: 11 },
      { id: '3', message: 'React top!', likesCount: 13 },
   ]
   let postsElement = posts.map(post => <Post message={post.message} amount={post.likesCount} />)
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
            {postsElement}
         </div>
      </div>
   );
}

export default MyPost;