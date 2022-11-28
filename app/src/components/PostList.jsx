import React from 'react';
import PostItem from "./PostItem";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const PostList = ({ posts, title, deletePost }) => {
  if (posts.length === 0) {
    return (
      <p className='list-is-empty'>This Post List is Empty!</p>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post, number) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem number={number + 1} post={post} deletePost={deletePost} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;