import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';

class PostSnippet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  doTheThing = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render () {
    const post = this.props.post
    return (
      <div>
          <Card border="dark" className="post-snippet" style={{ width: '25rem' }}>
            <Card.Body>
              <Link to={'/posts/'+ post.id }>
              <Card.Header className="text-center"> {post.title} </Card.Header>
              </Link>
            <Card.Text> {post.body} </Card.Text>
            </Card.Body>
              <Button onClick={ this.doTheThing }> Like {this.state.clicks} </Button>
          </Card>
        <br />
      </div >
    )
  }
}
export default PostSnippet;