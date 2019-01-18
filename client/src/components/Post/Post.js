import React from 'react'

const Post = ({ post: { id, title, body }, deletePost }) =>
  <div>
    <h1>{title}</h1>
    do some stuff hurr
  </div>

export default Post