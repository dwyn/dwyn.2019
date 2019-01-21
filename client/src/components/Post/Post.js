import React from 'react'

const Post = ({ post: { id, title, body }, deletePost }) =>
  <div>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>

export default Post