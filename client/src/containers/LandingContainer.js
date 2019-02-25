import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/postActions';
import PostSnippet from '../components/Post/PostSnippet';
import { Pagination, Container } from 'react-bootstrap';
import { push } from 'react-router-redux';

class LandingContainer extends Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this)
  }

  componentDidMount() {
    this.props.fetchPosts()
    // debugger
    // console.log(this.props.posts.allPosts)
  }

  render() {
    const { posts } = this.props;
    // Pagination
    const per_page = 5;
    const pages = Math.ceil(this.props.posts.length / per_page);
    const current_page = this.props.page;
    const start_offset = (current_page -1) * per_page;
    let start_count = 0;

    return (
        <Container>
          {/* <div className="container"> */}
            {posts.map((post, index) => {
              if (index >= start_offset && start_count < per_page) {
                start_count++;
                return(
                  <PostSnippet key={post.id} post={post} />
                );
              }
            })}
{/* 
          <Pagination 
            className="pagination pull-right"
            bsSize="medium"
            maxButtons={5} 
            first last next prev boundaryLinks
            items={pages}
            activePage={current_page}
            onSelect={this.changePage} /> */}
        </Container>
      // </div>
    )
  }
  // Change the posts lists current page
  changePage(page)
  {
    this.props.dispatch(push('/?page=' + page));
  }
}

LandingContainer.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return ({
    posts: state.posts.allPosts,
    page: state.posts.page || 1
    
  });
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPosts,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);