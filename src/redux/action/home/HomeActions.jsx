import { CALL_API } from '../../../middleware/api'
import { apiEndpoints } from '../../../services/ApiEndpointsConstants'
import {
  ELASTIC_SEARCH,
} from '../../../services/ApiEndpointsConstants'
import * as HomeConstants from './HomeConstants'


export function getElasticSearch(requestData) {
  return {
    [CALL_API]: {
      config: {
        data: requestData,
        method: 'post',
      },
      endpoint: apiEndpoints().entity(ELASTIC_SEARCH),
      types: [
        HomeConstants.GET_ELASTIC_SEARCH_REQUEST,
        HomeConstants.GET_ELASTIC_SEARCH_SUCCESS,
        HomeConstants.GET_ELASTIC_SEARCH_FAILED,
      ],
    },
  }
}

export function getElasticDetailSearch(requestData) {
  return {
    [CALL_API]: {
      config: {
        data: requestData,
        method: 'post',
      },
      endpoint: apiEndpoints().entity(ELASTIC_SEARCH),
      types: [
        HomeConstants.GET_ELASTIC_DETAIL_DATA_REQUEST,
        HomeConstants.GET_ELASTIC_DETAIL_DATA_SUCCESS,
        HomeConstants.GET_ELASTIC_DETAIL_DATA_FAILED,
      ],
    },
  }
}

export function getAllUniqueItemsType(requestData) {
  return {
    [CALL_API]: {
      config: {
        data: requestData,
        method: 'post',
      },
      endpoint: apiEndpoints().entity(ELASTIC_SEARCH),
      types: [
        HomeConstants.GET_ALL_ITEM_TYPE_DATA_REQUEST,
        HomeConstants.GET_ALL_ITEM_TYPE_DATA_SUCCESS,
        HomeConstants.GET_ALL_ITEM_TYPE_DATA_FAILED,
      ],
    },
  }
}

export function getAllUniqueSuppliers(requestData) {
  return {
    [CALL_API]: {
      config: {
        data: requestData,
        method: 'post',
      },
      endpoint: apiEndpoints().entity(ELASTIC_SEARCH),
      types: [
        HomeConstants.GET_ALL_UNIQUE_SUPPLIERS_DATA_REQUEST,
        HomeConstants.GET_ALL_UNIQUE_SUPPLIERS_DATA_SUCCESS,
        HomeConstants.GET_ALL_UNIQUE_SUPPLIERS_DATA_FAILED,
      ],
    },
  }
}

export function getAllUniqueTenders(requestData) {
  return {
    [CALL_API]: {
      config: {
        data: requestData,
        method: 'post',
      },
      endpoint: apiEndpoints().entity(ELASTIC_SEARCH),
      types: [
        HomeConstants.GET_ALL_UNIQUE_TENDERS_DATA_REQUEST,
        HomeConstants.GET_ALL_UNIQUE_TENDERS_DATA_SUCCESS,
        HomeConstants.GET_ALL_UNIQUE_TENDERS_DATA_FAILED,
      ],
    },
  }
}

export function getAllUniqueArticles(requestData) {
  return {
    [CALL_API]: {
      config: {
        data: requestData,
        method: 'post',
      },
      endpoint: apiEndpoints().entity(ELASTIC_SEARCH),
      types: [
        HomeConstants.GET_ALL_UNIQUE_ARTICLES_DATA_REQUEST,
        HomeConstants.GET_ALL_UNIQUE_ARTICLES_DATA_SUCCESS,
        HomeConstants.GET_ALL_UNIQUE_ARTICLES_DATA_FAILED,
      ],
    },
  }
}

export function getAllProvidersAndTrademarks(requestData) {
  return {
    [CALL_API]: {
      config: {
        data: requestData,
        method: 'post',
      },
      endpoint: apiEndpoints().entity(ELASTIC_SEARCH),
      types: [
        HomeConstants.GET_ALL_PROVIDERS_AND_TRADEMARKS_DATA_REQUEST,
        HomeConstants.GET_ALL_PROVIDERS_AND_TRADEMARKS_DATA_SUCCESS,
        HomeConstants.GET_ALL_PROVIDERS_AND_TRADEMARKS_DATA_FAILED,
      ],
    },
  }
}

export function clearElasticDetailSearch() {
  return (dispatch) => dispatch({
    type: HomeConstants.GET_ELASTIC_DETAIL_DATA_CLEAR,
  })
}

export function setSearchQueryParams(searchParams) {
  return (dispatch) => dispatch({
    type: HomeConstants.SET_ELASTIC_SEARCH_PARAMS,
    searchParams: searchParams
  })
}

export function setFilterParams(filterParams) {
  return (dispatch) => dispatch({
    type: HomeConstants.SET_FILTER_PARAMS,
    filterParams: filterParams
  })
}

/*
export function getListOfFiles() {
  return {
    [CALL_API]: {
      endpoint: apiEndpoints().entity(GET_LIST_OF_FILES),
      types: [
        HomeConstants.GET_LIST_OF_FILES_REQUEST,
        HomeConstants.GET_LIST_OF_FILES_SUCCESS,
        HomeConstants.GET_LIST_OF_FILES_FAILED,
      ],
    },
  }
}

export function getFileContentByName(fileName) {
  return {
    [CALL_API]: {
      config: {
        data: {
          'fileContent': '',
          'fileName': fileName,
        },
        method: 'post',
      },
      endpoint: apiEndpoints().entity(GET_FILE_CONTENT),
      types: [
        HomeConstants.GET_FILE_CONTENT_BY_NAME_REQUEST,
        HomeConstants.GET_FILE_CONTENT_BY_NAME_SUCCESS,
        HomeConstants.GET_FILE_CONTENT_BY_NAME_FAILED,
      ],
    },
  }
}

export function saveFileContentByName(fileName, fileContent) {
  return {
    [CALL_API]: {
      config: {
        data: {
          'fileContent': fileContent,
          'fileName': fileName,
        },
        method: 'post',
      },
      endpoint: apiEndpoints().entity(SAVE_FILE_CONTENT),
      types: [
        HomeConstants.SAVE_FILE_CONTENT_BY_NAME_REQUEST,
        HomeConstants.SAVE_FILE_CONTENT_BY_NAME_SUCCESS,
        HomeConstants.SAVE_FILE_CONTENT_BY_NAME_FAILED,
      ],
    },
  }
}

export function clearGetListOfFiles() {
  return (dispatch) => dispatch({
    type: HomeConstants.GET_LIST_OF_FILES_CLEAR,
  })
}

export function clearSaveFileContentByName() {
  return (dispatch) => dispatch({
    type: HomeConstants.SAVE_FILE_CONTENT_BY_NAME_CLEAR,
  })
}

export function clearGetFileContentByName() {
  return (dispatch) => dispatch({
    type: HomeConstants.GET_FILE_CONTENT_BY_NAME_CLEAR,
  })
}
*/