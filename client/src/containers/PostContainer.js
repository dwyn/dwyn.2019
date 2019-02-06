import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PostShow from '../components/Post/PostShow'
import { fetchPosts } from '../actions/postActions'

class PostContainer extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        <PostShow allPosts={posts} />
      </div>
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
)(PostContainer);