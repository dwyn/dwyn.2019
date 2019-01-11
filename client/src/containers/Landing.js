
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Aux from '../hoc/Aux'

class LandingContainer extends Component {
  render() {
    return (
      <Aux >
        <div> Header </div>
        <div> List of posts </div>
      </Aux>
    )
  }
}

export default LandingContainer;























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