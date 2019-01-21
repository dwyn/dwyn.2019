import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'
import { fetchPosts, deletePost } from '../actions/postActions'

import Post from '../components/Post/Post'

class LandingContainer extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }
  render() {
    debugger
    const {  posts } = this.props
    
    return (
      <div>
        { posts.map(post => <Post key={post.id} post={post} deletePost={this.props.deletePost} />) }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.current,
    posts: state.posts.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  fetchPosts,
  deletePost,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)





















// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux'; //connects components to redux store!
// import fetchPosts from '../store/actions/postActions'; //importing fetchPosts action!

// class Posts extends Component {
//   componentWillMount() {
//     this.props.fetchPosts(); //fetch request via imported action!
//   }

//   render() {
//     const postItems = this.props.posts.map(post => (
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//       </div>
//     ));
//     return (
//       <div>
//         <h1>Posts</h1>
//         {postItems}
//       </div>
//     );
//   }
// }

// Posts.propTypes = {
//   fetchPosts: PropTypes.func.isRequired,
//   posts: PropTypes.array.isRequired,
//   newPost: PropTypes.object
// };

// const mapStateToProps = state => ({
//   posts: state.posts.items,
//   newPost: state.posts.item
// });

// export default connect(mapStateToProps, { fetchPosts })(Posts);