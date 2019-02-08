import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postActions'
import PostList from '../components/Post/PostList'

class LandingContainer extends Component {
  componentWillMount() {
    this.props.fetchPosts()
    // debugger
  }

  render() { // Can I just pass `posts` in here? Why / Why not?
    const {  posts } = this.props
    return (
      <PostList allPosts={posts}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LandingContainer);