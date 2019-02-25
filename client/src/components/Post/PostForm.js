import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PostForm = (title, body) => {
  onChange(e) {
    const field = e.target.name
    let state = this.state

    state[field] = e.target.value
    this.setState(state)
  }

  onSubmit(e) {
    e.preventDefault()

    // this.props.createPost(post)
    this.setState({
      title: "",
      body: ""
    })
  }
  return (
    <div className="container newPostForm">
      <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="Title"
            value={title}
            onChange={this.onChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            value={body}
            onChange={this.onChange} />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg" block>Submit!</Button>
      </Form>
    </div>
  )
}
export default PostForm;