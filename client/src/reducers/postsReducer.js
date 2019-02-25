import { FETCH_POSTS, CREATE_POST, DELETE_POST } from "../actions/actionTypes"

const initialState = {
  allPosts: [],
  page: 0
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, allPosts: action.payload }
    case CREATE_POST:
      return { ...state, post: [...state.all, action.payload] }
    case DELETE_POST:
      return { ...state, post: state.all.filter(post => post.id !== action.payload.id) }
    default: return state
  }
}