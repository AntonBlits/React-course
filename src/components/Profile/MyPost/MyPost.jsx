import React from 'react';
import Post from './Post/Post';

const MyPost = () => {
   debugger;
   return (
      <div>my post
         <div>new post</div>
         <div>
            <Post message='Hello, my name is Antony' amount='17' />
            <Post message='Hello React developer!' amount='13' />
         </div>
      </div>
   );
}

export default MyPost;