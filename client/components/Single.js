import React, { Component } from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

export default function Single(props) {
  const { posts, comments, params: { postId } } = props;
  const i = posts.findIndex((post) => post.code === postId);
  const post = posts[i];
  const postComments = comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} {...props}/>
    </div>
  );
}

// When index is not need and just post, then use
// `const post = posts.find((post) => post.code === postId);`
