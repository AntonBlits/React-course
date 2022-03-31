import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreate, updateNewPostTextActionCreate } from '../../../redux/profile-reducer';
import MyPost from './MyPost';

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      onAddPost: () => dispatch(addPostActionCreate()),
      onPostChange: (text) => dispatch(updateNewPostTextActionCreate(text))
   }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;