import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';

const MyPost = (props) => {
   let postsElement = props.posts.map(post => <Post message={post.message} amount={post.likesCount} />)

   let onAddPost = () => {
      props.addPost();
   }

   let onPostChange = (e) => {
      let text = e.target.value;
      props.updateNewPostTextActionCreate(text);
   }

   return (
      <div className={s.postsBlock}>
         <h3>My post</h3>
         <div>
            <div> <textarea onChange={onPostChange} value={props.newPostText} />
            </div>
            <div>
               <button onClick={onAddPost}>add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElement}
         </div>
      </div>
   );
}

export default MyPost;