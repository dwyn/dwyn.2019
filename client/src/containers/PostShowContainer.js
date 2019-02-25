import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { push } from 'react-router-redux';

class PostShow extends Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this)
  }

  componentDidMount() {
  }

  render() {
    const { posts } = this.props;

    return (
      <Container>

      </Container>
    )
  }
}

LandingContainer.propTypes = {
  posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return ({
    posts: state.posts.allPosts,
  });
}

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);