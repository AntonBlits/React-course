import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';
import { useForm } from "react-hook-form";

const MyPostForm = (props) => {
   const { register, reset, handleSubmit } = useForm();

   return (
      <form onSubmit={handleSubmit(props.onSubmit)}>
         <div>
            <textarea {...register('newPostText')} />
         </div>
         <div>
            <button>add post</button>
         </div>
      </form>
   )
}
const MyPost = (props) => {

   let postsElement = props.posts.map(post => <Post key={post.id} message={post.message} amount={post.likesCount} />)

   let onAddPost = (data) => {
      props.addPost(data.newPostText);
   }

   return (
      <div className={s.postsBlock}>
         <h3>My post</h3>
         <MyPostForm onSubmit={onAddPost} />
         <div className={s.posts}>
            {postsElement}
         </div>
      </div>
   );
}

export default MyPost;

{/* <form onSubmit={handleSubmit(onSubmit)}>
         <div>
            <textarea onChange={onPostChange} value={props.newPostText} />
         </div>
         <div>
            <button onClick={onAddPost}>add post</button>
         </div>
      </form> */}