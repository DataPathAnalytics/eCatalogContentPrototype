import { BASE_URL } from '../middleware/api'

function addBaseUrl(url) {
  return `${BASE_URL}${url}`
}

const entity = (path) => {
  return addBaseUrl(path)
}

export const apiEndpoints = () => {
  return {
    entity,
  }
}


// PATH
export const LOGIN_USER = '/login'
export const LOGOUT_USER = '/logout'
export const GET_LIST_OF_FILES = '/files'
export const GET_FILE_CONTENT = '/files/file'
export const SAVE_FILE_CONTENT = '/files/save'
export const ELASTIC_SEARCH = '/medicine/_search'

