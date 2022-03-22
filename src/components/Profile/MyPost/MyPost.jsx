import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';

const MyPost = (props) => {
   let postsElement = props.posts.map(post => <Post message={post.message} amount={post.likesCount} />)
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