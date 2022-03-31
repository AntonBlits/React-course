import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';

const MyPost = (props) => {
   debugger;
   let postsElement = props.posts.map(post => <Post message={post.message} amount={post.likesCount} />)

   // let onAddPost = () => {
   //    props.onAddPost();
   // }

   let onPostChange = (e) => {
      let text = e.target.value;
      props.onPostChange(text);
   }

   return (
      <div className={s.postsBlock}>
         <h3>My post</h3>
         <div>
            <div> <textarea onChange={onPostChange} value={props.newPostText} />
            </div>
            <div>
               <button onClick={props.onAddPost()}>add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElement}
         </div>
      </div>
   );
}

export default MyPost;