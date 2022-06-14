import React, { useEffect } from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';
import { useForm } from "react-hook-form";

const MyPostForm = ({ onSubmit }) => {
   const { register, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

   useEffect(() => {
      reset();
   }, [onSubmit])

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div>
            <textarea placeholder='Write a post' className={errors.newPostText && s.error} {...register('newPostText', {
               required: 'Your textarea is required',
               maxLength: {
                  value: 20,
                  message: 'Your textarea exceed maxLength 20!'
               }
            })} />
            {errors?.newPostText && <div style={{ color: 'red' }}>{errors?.newPostText?.message}</div>}
         </div>
         <div>
            <button className={s.btn}>add post</button>
         </div>
      </form>
   )
}


const MyPost = ({ posts, addPost }) => {

   let postsElement = posts.map(post => <Post key={post.id} message={post.message} amount={post.likesCount} />)

   let onAddPost = (data) => {
      addPost(data.newPostText);
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

