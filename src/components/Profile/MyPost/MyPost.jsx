import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';

const MyPost = (props) => {
   let postsElement = props.posts.map(post => <Post message={post.message} amount={post.likesCount} />)

   let newPostElement = React.createRef();

   let addPost = () => {
      props.addPost();
      props.updateNewPostText('');
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }

   return (
      <div className={s.postsBlock}>
         <h3>My post</h3>
         <div>
            <div> <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
            </div>
            <div>
               <button onClick={addPost}>add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElement}
         </div>
      </div>
   );
}

export default MyPost;