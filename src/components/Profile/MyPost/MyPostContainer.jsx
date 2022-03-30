import React from 'react';
import { addPostActionCreate, updateNewPostTextActionCreate } from '../../../redux/profile-reducer';
import MyPost from './MyPost';



const MyPostContainer = (props) => {

   let state = props.store.getState();

   let onAddPost = () => {
      props.store.dispatch(addPostActionCreate());
   }

   let onPostChange = (text) => {
      props.store.dispatch(updateNewPostTextActionCreate(text));
   }

   return <MyPost addPost={onAddPost} updateNewPostTextActionCreate={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
}

export default MyPostContainer;