import * as AuthConstants from '../../action/auth/AuthConstants'
import jwt_decode from 'jwt-decode'

const initialState = {
  tokenIsFetching: false,
  logoutIsFetching: false,
  logoutErrorMessage: '',
  token: localStorage.getItem('s_token') || null,
  userInfo: JSON.parse(localStorage.getItem('s_user_info')) || {},
  loginFailed: false,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    // LOGIN
    case AuthConstants.LOGIN_REQUEST:
      return {
        ...state,
        tokenIsFetching: true,
      }

    case AuthConstants.LOGIN_SUCCESS:
      localStorage.setItem('s_token', `Bearer ${action.data.token}`)
      localStorage.setItem('s_user_info', JSON.stringify(jwt_decode(action.data.token)))
      return {
        ...state,
        token: action.data.token,
        userInfo: jwt_decode(action.data.token),
        tokenIsFetching: false,
      }

    case AuthConstants.LOGIN_FAILED:
      return {
        ...state,
        tokenIsFetching: false,
        loginFailed: true,
      }

    case AuthConstants.LOGIN_CLEAR:
      return {
        ...state,
        tokenIsFetching: false,
        loginFailed: false,
      }

    case AuthConstants.LOGOUT_REQUEST:
      return {
        ...state,
        logoutIsFetching: true,

      }
    case AuthConstants.LOGOUT_SUCCESS:
      localStorage.removeItem('s_token')
      localStorage.removeItem('s_user_info')
      return {
        ...state,
        logoutIsFetching: false,
      }
    case AuthConstants.LOGOUT_FAILED:
      return {
        ...state,
        logoutIsFetching: false,
        logoutErrorMessage: action.error.response.data,
      }

    default:
      return state
  }
}