import { connect } from 'react-redux';
import { addPostActionCreate } from '../../../redux/profile-reducer';
import MyPost from './MyPost';

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: (newPostText) => dispatch(addPostActionCreate(newPostText)),
   }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;