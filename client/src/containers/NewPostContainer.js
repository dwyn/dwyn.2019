import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createPost } from '../actions/postActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewPostContainer extends Component {
  constructor() {
    super()

    this.state = {
      title: "",
      body: ""
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const field = e.target.name
    let state = this.state

    state[field] = e.target.value
    this.setState(state)
  }

  onSubmit(e) {
    e.preventDefault()

    this.props.createPost(this.state)
    this.setState({
      title: "",
      body: ""
    })
  }

  render() {
    const { title, body } = this.state

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Title" value={title} onChange={this.onChange}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="5" value={body} onChange={this.onChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" size="lg" block>Submit!</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createPost
}, dispatch)

export default connect(null, mapDispatchToProps)(NewPostContainer)