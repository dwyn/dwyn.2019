import { FETCH_POSTS, CREATE_POST, DELETE_POST } from "./actionTypes"

const API_URL = 'http://localhost:3001/api'

export const fetchPosts = () => dispatch => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  fetch(`${API_URL}/posts`, data)
    .then(res => res.json())
    .then(posts => 
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    )
  .catch(err => err)
}

export const createPost = (postData) => dispatch => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "CPZx-ZdpJ4i2b6-udhy6"
    },
    body: JSON.stringify({ postData })
  }

  fetch(`${API_URL}/posts`, data)
    .then(response => response.json())
    .then(post => dispatch({
      type: CREATE_POST,
      payload: post
    }))
    .catch(err => err)
}

export const deletePost = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${API_URL}/posts/${id}`, data)
      .then(response => response.json())
      .then(post => dispatch({
        type: DELETE_POST,
        payload: post
      }))
      .catch(err => err)
  }
}