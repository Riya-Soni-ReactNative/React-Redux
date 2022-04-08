import { Login, SignUp } from './constants'
export function logIn(data) {
  return {
    type: Login,
    payload: data
  }
}
export function signUp(data) {
  return {
    type: SignUp,
    payload: data
  }
}
