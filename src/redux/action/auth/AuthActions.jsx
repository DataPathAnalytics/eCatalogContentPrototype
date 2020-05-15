import { CALL_API } from '../../../middleware/api'
import { apiEndpoints } from '../../../services/ApiEndpointsConstants'
import {
  LOGIN_USER,
  LOGOUT_USER,
} from '../../../services/ApiEndpointsConstants'
import * as Auth from './AuthConstants'

export function loginUser(requestParams) {
  return {
    [CALL_API]: {
      config: {
        data: requestParams,
        method: 'post',
      },
      endpoint: apiEndpoints().entity(LOGIN_USER),
      types: [
        Auth.LOGIN_REQUEST,
        Auth.LOGIN_SUCCESS,
        Auth.LOGIN_FAILED,
      ],
    },
  }
}

export function logOutUser(requestParams) {
  return {
    [CALL_API]: {
      config: {
        data: requestParams,
        method: 'post',
      },
      endpoint: apiEndpoints().entity(LOGOUT_USER),
      types: [
        Auth.LOGOUT_REQUEST,
        Auth.LOGOUT_SUCCESS,
        Auth.LOGOUT_FAILED,
      ],
    },
  }
}

export function clearLoginError() {
  return {
    type: Auth.LOGIN_CLEAR,
  }
}
