import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createPost } from '../actions/postActions'

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
      <form onSubmit={this.onSubmit}>
      test
        <input name="title" placeholder="Title" value={title} onChange={this.onChange} />
        <input name="body" placeholder="Digame!" value={body} onChange={this.onChange} />
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createPost
}, dispatch)

export default connect(null, mapDispatchToProps)(NewPostContainer)