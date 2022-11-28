import React from 'react';
import PostItem from "./PostItem";

const PostList = ({ posts, title, deletePost }) => {
  if (!posts.length) {
    return (
      <p className='list-is-empty'>This Post List is Empty!</p>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
      {posts.map((post, number) =>
        <PostItem number={number + 1} post={post} key={post.id} deletePost={deletePost} />
      )}

    </div>
  );
};

export default PostList;