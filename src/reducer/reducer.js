import { Login, SignUp } from './constants'

const initialState = {
  user: {
    username: null,
    email: null,
    password: null
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Login:
      return {
        user: {
          username: action.payload.username,
          email: action.payload.email,
          password: action.payload.password
        }
      };
    case SignUp:
      return {
        user: {
          username: action.payload.username,
          email: action.payload.email,
          password: action.payload.password
        }
      };
    default:
      return state
  }
}