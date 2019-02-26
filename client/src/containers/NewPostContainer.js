import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createPost } from '../actions/postActions'
import { Container } from 'react-bootstrap'

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
    console.log('A')
    this.props.createPost(this.state)
    console.log('B')
    this.setState({
      title: "",
      body: ""
    })
  }

  render() {
    const { title, body } = this.state

    return (
      <Container>
        <form onSubmit={this.onSubmit}>
          <input name="title" placeholder="Title" value={title} onChange={this.onChange} />
          <br/>
          <textarea name="body" placeholder="Digame!" value={body} onChange={this.onChange} />
          <br />
          <button type="submit">Add</button>
        </form>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createPost
}, dispatch)

export default connect(null, mapDispatchToProps)(NewPostContainer)