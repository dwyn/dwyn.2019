import React from 'react'
import { connect } from 'react-redux';
import { Jumbotron, Container } from 'react-bootstrap'

const PostShow = ({ post }) =>{
  console.log(post.title)
  return (
    <Jumbotron fluid className="post-show">
      <Container>
        <h1> { post.title } </h1>
        <p> { post.body } </p>
      </Container>
    </Jumbotron>
  )
}

const mapStateToProps = (state, match) => {
  const post = state.posts.allPosts.find(post => String(post.id) === match.match.params.id)
  if (post) {
    return { post: post }
  } else {
    return { post: {} }
  }
}
export default connect(mapStateToProps)(PostShow);