import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';

const PostSnippet = ({ match, post }) => {
  // doTheThing = event => {
  //   event.preventDefault();

  // }
    return (
      <div>
          <Card border="dark" className="post-snippet" style={{ width: '25rem' }}>
            <Card.Body>
              <Link to={'/posts/'+ post.id 
              }>
                <Card.Header className="text-center"> {post.title} </Card.Header>
              </Link>
              <Card.Text> {post.body} </Card.Text>
              {/* <Button 
                // onClick={doTheThing}
                post={post}
                // to="/posts/:id"'
                // renderAs={Link}
                size="sm" 
                variant="info" 
                block> Read More
              </Button> */}
            </Card.Body>
          </Card>
        <br />
      </div >
    )
  // }
}
export default PostSnippet;