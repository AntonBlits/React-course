import React from 'react';
import Post from './Post/Post';

const MyPost = () => {
   return (
      <div>my post
         <div>new post</div>
         <div>
            <Post />
            <Post />
         </div>
      </div>
   );
}

export default MyPost;