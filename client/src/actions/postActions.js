const API_URL = 'http://localhost:3001/api'

export const fetchPosts = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'//,
      // 'Authorization': 'JnmYxP9MrsQhq2-sTR5d'
    }
  }

  return dispatch => {
    fetch(`${API_URL}/posts`, data)
      .then(response => response.json())
      .then(posts => dispatch({
        type: 'FETCH_POSTS',
        payload: posts
      }))
      .catch(err => err)
  }
}

export const createPost = post => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ post })
  }

  return dispatch => {
    fetch(`${API_URL}/posts`, data)
      .then(response => response.json())
      .then(post => dispatch({
        type: 'CREATE_POST',
        payload: post
      }))
      .catch(err => err)
  }
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
        type: 'DELETE_POST',
        payload: post
      }))
      .catch(err => err)
  }
}