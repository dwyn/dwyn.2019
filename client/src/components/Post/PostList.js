import React from 'react';
import {  Link } from 'react-router-dom';

const PostList = ({ allPosts }) => 
  <div className="container">
    <ul className="list-group">
      {allPosts.map(post => <li key={ post.id }>  <Link  to={`/posts/${post.id}`}> {post.title} </Link> </li>) }
    </ul>
  </div>;

export default PostList;