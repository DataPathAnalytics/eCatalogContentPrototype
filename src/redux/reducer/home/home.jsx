import * as HomeConstants from '../../action/home/HomeConstants'

const initialState = {
  elasticSearchQueryParams: {
    // 'from': 0,
    'search_after': [0],
    'size': 10,
    'query': {
      'bool': {
        'must': [],
      },
    },
    'sort': [
      { 'id': 'asc' },
    ],
  },

  elasticSearchDefaultQueryParams: {
    // 'from': 0,
    'search_after': [0],
    'size': 10,
    'query': {
      'bool': {
        'must': [],
      },
    },
    'sort': [
      { 'id': 'asc' },
    ],
  },

  elasticSearchData: {},
  elasticSearchDataIsFetching: false,
  elasticSearchDataErrorMessage: '',
  elasticSearchDetailsData: {},
  elasticSearchDetailsDataIsFetching: false,
  elasticSearchDetailsDataErrorMessage: '',
  allUniqueItemTypesData: [],
  allUniqueItemTypesDataIsFetching: false,
  allUniqueItemTypesDataErrorMessage: '',
  allUniqueSuppliersData: [],
  allUniqueSuppliersDataIsFetching: false,
  allUniqueSuppliersDataErrorMessage: '',
  allUniqueTendersData: [],
  allUniqueTendersDataIsFetching: false,
  allUniqueTendersDataErrorMessage: '',
  allUniqueArticlesData: [],
  allUniqueArticlesDataIsFetching: false,
  allUniqueArticlesDataErrorMessage: '',
  allProvidersAndTrademarksData: [],
  allProvidersAndTrademarksDataIsFetching: false,
  allProvidersAndTrademarksDataErrorMessage: '',

  /*
    listOfFiles: [],
    listOfFilesIsFetching: false,
    listOfFilesErrorMessage: '',
    fileContentData: '',
    fileContentDataIsFetching: false,
    fileContentDataErrorMessage: '',
    savedFileContentData: '',
    savedFileContentDataIsFetching: false,
    savedFileContentDataErrorMessage: '',
    */
}

export default function homeStore(state = initialState, action) {
  switch (action.type) {

    // GET ELASTIC SEARCH
    case HomeConstants.GET_ELASTIC_SEARCH_REQUEST:
      return {
        ...state,
        elasticSearchDataIsFetching: true,
      }
    case HomeConstants.GET_ELASTIC_SEARCH_SUCCESS:
      return {
        ...state,
        elasticSearchData: action.data,
        elasticSearchDataIsFetching: false,
      }
    case HomeConstants.GET_ELASTIC_SEARCH_FAILED:
      return {
        ...state,
        elasticSearchDataIsFetching: false,
        // elasticSearchDataErrorMessage: action.error.response.data,
        elasticSearchDataErrorMessage: '',
      }
    case HomeConstants.GET_ELASTIC_SEARCH_CLEAR:
      return {
        ...state,
        elasticSearchData: {},
        elasticSearchDataIsFetching: false,
        elasticSearchDataErrorMessage: '',
      }

    // GET ELASTIC SEARCH
    case HomeConstants.GET_ELASTIC_DETAIL_DATA_REQUEST:
      return {
        ...state,
        elasticSearchDetailsDataIsFetching: true,
      }
    case HomeConstants.GET_ELASTIC_DETAIL_DATA_SUCCESS:
      return {
        ...state,
        elasticSearchDetailsData: action.data,
        elasticSearchDetailsDataIsFetching: false,
      }
    case HomeConstants.GET_ELASTIC_DETAIL_DATA_FAILED:
      return {
        ...state,
        elasticSearchDetailsDataIsFetching: false,
        // elasticSearchDataErrorMessage: action.error.response.data,
        elasticSearchDetailsDataErrorMessage: '',
      }
    case HomeConstants.GET_ELASTIC_DETAIL_DATA_CLEAR:
      return {
        ...state,
        elasticSearchDetailsData: {},
        elasticSearchDetailsDataIsFetching: false,
        elasticSearchDetailsDataErrorMessage: '',
      }

// GET ELASTIC SEARCH
    case HomeConstants.GET_ALL_ITEM_TYPE_DATA_REQUEST:
      return {
        ...state,
        allUniqueItemTypesDataIsFetching: true,
      }
    case HomeConstants.GET_ALL_ITEM_TYPE_DATA_SUCCESS:
      return {
        ...state,
        allUniqueItemTypesData: action.data,
        allUniqueItemTypesDataIsFetching: false,
      }
    case HomeConstants.GET_ALL_ITEM_TYPE_DATA_FAILED:
      return {
        ...state,
        allUniqueItemTypesDataIsFetching: false,
        // elasticSearchDataErrorMessage: action.error.response.data,
        allUniqueItemTypesDataErrorMessage: '',
      }
    case HomeConstants.GET_ALL_ITEM_TYPE_DATA_CLEAR:
      return {
        ...state,
        allUniqueItemTypesData: [],
        allUniqueItemTypesDataIsFetching: false,
        allUniqueItemTypesDataErrorMessage: '',
      }

// GET ELASTIC SEARCH
    case HomeConstants.GET_ALL_UNIQUE_SUPPLIERS_DATA_REQUEST:
      return {
        ...state,
        allUniqueSuppliersDataIsFetching: true,
      }
    case HomeConstants.GET_ALL_UNIQUE_SUPPLIERS_DATA_SUCCESS:
      return {
        ...state,
        allUniqueSuppliersData: action.data,
        allUniqueSuppliersDataIsFetching: false,
      }
    case HomeConstants.GET_ALL_UNIQUE_SUPPLIERS_DATA_FAILED:
      return {
        ...state,
        allUniqueSuppliersDataIsFetching: false,
        // elasticSearchDataErrorMessage: action.error.response.data,
        allUniqueSuppliersDataErrorMessage: '',
      }
    case HomeConstants.GET_ALL_UNIQUE_SUPPLIERS_DATA_CLEAR:
      return {
        ...state,
        allUniqueSuppliersData: [],
        allUniqueSuppliersDataIsFetching: false,
        allUniqueSuppliersDataErrorMessage: '',
      }

// GET ELASTIC SEARCH
    case HomeConstants.GET_ALL_UNIQUE_TENDERS_DATA_REQUEST:
      return {
        ...state,
        allUniqueTendersDataIsFetching: true,
      }
    case HomeConstants.GET_ALL_UNIQUE_TENDERS_DATA_SUCCESS:
      return {
        ...state,
        allUniqueTendersData: action.data,
        allUniqueTendersDataIsFetching: false,
      }
    case HomeConstants.GET_ALL_UNIQUE_TENDERS_DATA_FAILED:
      return {
        ...state,
        allUniqueTendersDataIsFetching: false,
        // elasticSearchDataErrorMessage: action.error.response.data,
        allUniqueTendersDataErrorMessage: '',
      }
    case HomeConstants.GET_ALL_UNIQUE_TENDERS_DATA_CLEAR:
      return {
        ...state,
        allUniqueTendersData: [],
        allUniqueTendersDataIsFetching: false,
        allUniqueTendersDataErrorMessage: '',
      }

// GET ELASTIC SEARCH
    case HomeConstants.GET_ALL_UNIQUE_ARTICLES_DATA_REQUEST:
      return {
        ...state,
        allUniqueArticlesDataIsFetching: true,
      }
    case HomeConstants.GET_ALL_UNIQUE_ARTICLES_DATA_SUCCESS:
      return {
        ...state,
        allUniqueArticlesData: action.data,
        allUniqueArticlesDataIsFetching: false,
      }
    case HomeConstants.GET_ALL_UNIQUE_ARTICLES_DATA_FAILED:
      return {
        ...state,
        allUniqueArticlesDataIsFetching: false,
        // elasticSearchDataErrorMessage: action.error.response.data,
        allUniqueArticlesDataErrorMessage: '',
      }
    case HomeConstants.GET_ALL_UNIQUE_ARTICLES_DATA_CLEAR:
      return {
        ...state,
        allUniqueArticlesData: [],
        allUniqueArticlesDataIsFetching: false,
        allUniqueArticlesDataErrorMessage: '',
      }

// GET ELASTIC SEARCH
    case HomeConstants.GET_ALL_PROVIDERS_AND_TRADEMARKS_DATA_REQUEST:
      return {
        ...state,
        allProvidersAndTrademarksDataIsFetching: true,
      }
    case HomeConstants.GET_ALL_PROVIDERS_AND_TRADEMARKS_DATA_SUCCESS:
      return {
        ...state,
        allProvidersAndTrademarksData: action.data,
        allProvidersAndTrademarksDataIsFetching: false,
      }
    case HomeConstants.GET_ALL_PROVIDERS_AND_TRADEMARKS_DATA_FAILED:
      return {
        ...state,
        allProvidersAndTrademarksDataIsFetching: false,
        // elasticSearchDataErrorMessage: action.error.response.data,
        allProvidersAndTrademarksDataErrorMessage: '',
      }
    case HomeConstants.GET_ALL_PROVIDERS_AND_TRADEMARKS_DATA_CLEAR:
      return {
        ...state,
        allProvidersAndTrademarksData: [],
        allProvidersAndTrademarksDataIsFetching: false,
        allProvidersAndTrademarksDataErrorMessage: '',
      }

    case HomeConstants.SET_ELASTIC_SEARCH_PARAMS:
      return {
        ...state,
        elasticSearchQueryParams: action.searchParams,
      }
    default:
      return state


    /*
    //GET LIST OF FILES
        case HomeConstants.GET_LIST_OF_FILES_REQUEST:
          return {
            ...state,
            listOfFilesIsFetching: true,
          }
        case HomeConstants.GET_LIST_OF_FILES_SUCCESS:
          return {
            ...state,
            listOfFilesIsFetching: false,
            listOfFiles: action.data,
          }
        case HomeConstants.GET_LIST_OF_FILES_FAILED:
          return {
            ...state,
            listOfFilesIsFetching: false,
            listOfFilesErrorMessage: action.error.response.data,
          }
        case HomeConstants.GET_LIST_OF_FILES_CLEAR:
          return {
            ...state,
            listOfFilesIsFetching: false,
            listOfFiles: [],
            listOfFilesErrorMessage: '',
          }

    // GET FILE CONTENT
        case HomeConstants.GET_FILE_CONTENT_BY_NAME_REQUEST:
          return {
            ...state,
            fileContentDataIsFetching: true,
          }
        case HomeConstants.GET_FILE_CONTENT_BY_NAME_SUCCESS:
          return {
            ...state,
            fileContentDataIsFetching: false,
            fileContentData: action.data.fileContent,
          }
        case HomeConstants.GET_FILE_CONTENT_BY_NAME_FAILED:
          return {
            ...state,
            fileContentDataIsFetching: false,
            fileContentDataErrorMessage: action.error.response.data,
          }
        case HomeConstants.GET_FILE_CONTENT_BY_NAME_CLEAR:
          return {
            ...state,
            fileContentDataIsFetching: false,
            fileContentData: '',
            fileContentDataErrorMessage: '',
          }

    // SAVE FILE CONTENT
        case HomeConstants.SAVE_FILE_CONTENT_BY_NAME_REQUEST:
          return {
            ...state,
            savedFileContentDataIsFetching: true,
          }
        case HomeConstants.SAVE_FILE_CONTENT_BY_NAME_SUCCESS:
          return {
            ...state,
            savedFileContentDataIsFetching: false,
            savedFileContentData: action.data,
          }
        case HomeConstants.SAVE_FILE_CONTENT_BY_NAME_FAILED:
          return {
            ...state,
            savedFileContentDataIsFetching: false,
            savedFileContentDataErrorMessage: action.error.response.data,
          }
        case HomeConstants.SAVE_FILE_CONTENT_BY_NAME_CLEAR:
          return {
            ...state,
            savedFileContentDataIsFetching: false,
            savedFileContentData: '',
            savedFileContentDataErrorMessage: '',
          }
        default:
          return state
    */
  }
}