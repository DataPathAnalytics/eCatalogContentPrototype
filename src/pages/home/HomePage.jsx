import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server'
import {
  getElasticSearch,
  setSearchQueryParams,
  getElasticDetailSearch,
  clearElasticDetailSearch,
  getAllUniqueItemsType,
  getAllUniqueSuppliers,
  getAllUniqueTenders,
  getAllUniqueArticles,
  getAllProvidersAndTrademarks,
} from '../../redux/action/home/HomeActions'
import _ from 'lodash'
import { generate } from 'shortid'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, Table, Pagination } from 'antd'
import DetailsTable from './components/DetailsTable'
import DetailsTableActionButtons from './components/DetailsTableActionButtons'
import ModalDetailView from './components/ModalDetailView'
import FiltersComponent from './components/FiltersComponent'
import StatisticComponent from '../../components/statistic/StatisticComponent'
import { TABLE_COLUMNS_OPTIONS } from './HomePageConstants'

import './HomePage.css'

class HomePage extends Component {
  constructor() {
    super()

    this.tempData = []

    this.state = {
      showEditModal: false,
      selectedFileName: null,
      expandedRows: [],
      page: 1,
      pageSize: 10,
      tableKey: generate(),
      showDetailModal: false,
      detailsData: {},
      allSelectedData: {},
    }
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.elasticSearchQueryParams, this.props.elasticSearchQueryParams)) {
      this.props.getElasticSearch(this.props.elasticSearchQueryParams)
    }
  }

  componentDidMount() {
    this.props.getElasticSearch(this.props.elasticSearchQueryParams)
    this.props.getAllUniqueItemsType({
      '_source': {
        'includes': ['Item Type / Lot'],
      },
      'aggs': {
        'uniq_items': {
          'terms': { 'field': 'Item Type / Lot.keyword', 'size': 1000 },
        },
        'uniq_items_value': {
          'cardinality': { 'field': 'Item Type / Lot.keyword' },
        },
      },
    })

    this.props.getAllUniqueSuppliers({
      '_source': {
        'includes': ['Provider'],
      },
      'aggs': {
        'uniq_items': {
          'terms': { 'field': 'Provider.keyword', 'size': 1000 },
        },
        'uniq_items_value': {
          'cardinality': { 'field': 'Provider.keyword' },
        },
      },
    })

    this.props.getAllUniqueTenders({
      '_source': {
        'includes': ['Tender'],
      },
      'aggs': {
        'uniq_items': {
          'terms': { 'field': 'Tender.keyword', 'size': 1000 },
        },
        'uniq_items_value': {
          'cardinality': { 'field': 'Tender.keyword' },
        },
      },
    })

    this.props.getAllUniqueArticles({
      '_source': {
        'includes': ['Article /'],
      },
      'aggs': {
        'uniq_items_value': {
          'cardinality': { 'field': 'Article /.keyword' },
        },
      },
    })

    this.props.getAllProvidersAndTrademarks({
      '_source': {
        'includes': ['item'],
      },
      'aggs': {
        'uniq_items_value': {
          'cardinality': { 'field': 'item.keyword' },
        },
      },
    })
  }

  handleExpandedRow = (expandedStatus, record) => {
    // this.props.clearElasticDetailSearch()
    if (expandedStatus) {
      this.setState({
        expandedRows: [record.id],
      }, () => {
        let searchParams = {
          query: {
            bool: {
              must: [
                {
                  term: {
                    'Title.keyword': record.Title,
                  },
                },
                {
                  term: {
                    'Provider.keyword': record.Provider,
                  },
                },
              ],
            },
          },
        }

        this.props.getElasticDetailSearch(searchParams)
      })
    } else {
      this.setState({
        expandedRows: [],
      })
    }
  }

  prepareMainTableData = () => {
    const { elasticSearchData } = this.props

    return !_.isEmpty(elasticSearchData) ? elasticSearchData.hits.hits.map((item) => (_.merge({}, item._source, { id: item._id }))) : []
  }

  handlePaginationChange = (page, pageSize) => {
    let elasticSearchQueryParams = _.cloneDeep(this.props.elasticSearchQueryParams)

    this.setState({
      page: page,
      pageSize: pageSize,
    }, () => {
      elasticSearchQueryParams.search_after = [(pageSize * (page - 1))]
      elasticSearchQueryParams.size = pageSize
      this.props.setSearchQueryParams(elasticSearchQueryParams)
    })
  }

  handlePaginationLimitChange = (current, size) => {
    let elasticSearchQueryParams = _.cloneDeep(this.props.elasticSearchQueryParams)

    this.setState({
      page: current,
      pageSize: size,
    }, () => {
      elasticSearchQueryParams.search_after = [(size * (current - 1))]
      elasticSearchQueryParams.size = size
      this.props.setSearchQueryParams(elasticSearchQueryParams)
    })
  }

  handleConvertToPDF = (data) => {
  }

  handlePreviewDetails = (data) => {
    this.setState({
      showDetailModal: true,
      detailsData: data,
    })
  }

  renderActionButtons = (data, id) => {
    return (
      <DetailsTableActionButtons
        tableData={_.merge({}, data, { id: id })}
        handleConvertToPDF={this.handleConvertToPDF}
        handlePreviewDetails={this.handlePreviewDetails}
      />
    )
  }

  renderDetailsTable = (record, index) => {
    const { elasticSearchDetailsData } = this.props
    let dataSource = !_.isEmpty(elasticSearchDetailsData) ? elasticSearchDetailsData.hits.hits.map((item) => (_.merge({}, item._source, {
      id: item._id,
      actions: this.renderActionButtons(item._source, item._id),
    }))) : []
    return (
      <DetailsTable
        dataSource={dataSource}
      />
    )
  }

  handleCloseModal = () => {
    this.setState({
      showDetailModal: false,
      detailsData: {},
    })
  }

  renderDetailsDataModal = (status = false) => {
    return (
      <ModalDetailView
        returnOnlyDetails={status}
        visible={this.state.showDetailModal}
        dataSource={this.state.detailsData}
        onCancel={this.handleCloseModal}
      />
    )
  }

  handleSelectFilterValue = (value, fieldName, searchType, onlySaveValueToState = false) => {
    let allSelectedData = _.cloneDeep(this.state.allSelectedData)

    if (allSelectedData.hasOwnProperty(fieldName)) {
      allSelectedData[fieldName] = value
    } else {
      allSelectedData = _.merge({}, allSelectedData, {
        [fieldName]: value,
      })
    }
    this.setState({
      allSelectedData: allSelectedData,
      page: 1,
    })

    if (onlySaveValueToState) {
      return
    }

    let elasticSearchQueryParams = _.cloneDeep(this.props.elasticSearchQueryParams)
    elasticSearchQueryParams.search_after = [0]
    elasticSearchQueryParams.size = this.state.pageSize

    if (!_.isEmpty(value)) {
      if (elasticSearchQueryParams.query.hasOwnProperty('bool')) {
        let matchExistsIndex = -1
        elasticSearchQueryParams.query.bool.must.filter((fData, index) => {
          let exists = Object.keys(fData).filter((key) => {
            if (fData[key].hasOwnProperty(fieldName)) {
              matchExistsIndex = index
            }
          })
          return !_.isEmpty(exists) ? fData : false
        })

        if (matchExistsIndex !== -1) {
          elasticSearchQueryParams.query.bool.must[matchExistsIndex][searchType][fieldName] = value
        } else {
          elasticSearchQueryParams.query.bool.must.push({
            [searchType]: {
              [fieldName]: value,
            },
          })
        }
      } else {
        elasticSearchQueryParams.query = {
          'bool': {
            'must': [
              {
                [searchType]: {
                  [fieldName]: value,
                },
              },
            ],
          },
        }
      }

      this.setState({
        page: 1,
      }, () => {
        this.props.setSearchQueryParams(elasticSearchQueryParams)
      })
    } else {
      if (elasticSearchQueryParams.query.hasOwnProperty('bool')) {
        elasticSearchQueryParams.query.bool.must = elasticSearchQueryParams.query.bool.must.filter((fData) => {
          let exists = Object.keys(fData).filter((key) => (!fData[key].hasOwnProperty(fieldName)))
          return !_.isEmpty(exists) ? fData : false
        })
      }
      this.setState({
        page: 1,
      }, () => {
        this.props.setSearchQueryParams(elasticSearchQueryParams)
      })
    }
  }

  handleResetAllFilters = () => {
    const elasticSearchDefaultQueryParams = _.cloneDeep(this.props.elasticSearchDefaultQueryParams)
    this.setState({
      allSelectedData: {},
      page: 1,
    }, () => {
      elasticSearchDefaultQueryParams.search_after = [0]
      elasticSearchDefaultQueryParams.size = this.state.pageSize
      this.props.setSearchQueryParams(elasticSearchDefaultQueryParams)
    })
  }

  render() {
    const {
      elasticSearchData,
      allUniqueItemTypesData,
      allUniqueTendersData,
      allUniqueSuppliersData,
      allUniqueArticlesData,
      allProvidersAndTrademarksData,
    } = this.props

    return (
      <div className="HomePage">
        {this.renderDetailsDataModal()}
        <StatisticComponent
          articleData={!_.isEmpty(allUniqueArticlesData) ? allUniqueArticlesData.aggregations.uniq_items_value.value : 0}
          lotData={!_.isEmpty(allUniqueItemTypesData) ? allUniqueItemTypesData.aggregations.uniq_items_value.value : 0}
          supplierData={!_.isEmpty(allUniqueSuppliersData) ? allUniqueSuppliersData.aggregations.uniq_items_value.value : 0}
          tendersData={!_.isEmpty(allUniqueTendersData) ? allUniqueTendersData.aggregations.uniq_items_value.value : 0}
          itemsData={!_.isEmpty(allProvidersAndTrademarksData) ? allProvidersAndTrademarksData.aggregations.uniq_items_value.value : 0}
        />
        <FiltersComponent
          allSelectedData={this.state.allSelectedData}
          allUniqueItemTypes={!_.isEmpty(allUniqueItemTypesData) ? allUniqueItemTypesData.aggregations.uniq_items.buckets : []}
          allUniqueSuppliers={!_.isEmpty(allUniqueSuppliersData) ? allUniqueSuppliersData.aggregations.uniq_items.buckets : []}
          allUniqueTenders={!_.isEmpty(allUniqueTendersData) ? allUniqueTendersData.aggregations.uniq_items.buckets : []}
          handleSelectFilterValue={this.handleSelectFilterValue}
          handleResetAllFilters={this.handleResetAllFilters}
        />
        <div className="site-table-component">
          <Row style={{ marginBottom: 15 }}>
            <Col span={24}>
              <Table
                key={this.state.tableKey}
                rowKey={'id'}
                bordered
                expandedRowKeys={this.state.expandedRows}
                pagination={{ pageSize: this.state.pageSize, hideOnSinglePage: true }}
                onExpand={(expanded, record) => this.handleExpandedRow(expanded, record)}
                // onExpandedRowsChange={(expandedRows) => this.handleExpandedRow(expandedRows)}
                expandedRowRender={(record, index) => this.renderDetailsTable(record, index)}
                dataSource={this.prepareMainTableData()}
                columns={TABLE_COLUMNS_OPTIONS}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div style={{ float: 'right' }}>
                <Pagination
                  showSizeChanger
                  current={this.state.page}
                  defaultCurrent={1}
                  total={!_.isEmpty(elasticSearchData) ? elasticSearchData.hits.total : 1}
                  onChange={(page, pageSize) => this.handlePaginationChange(page, pageSize)}
                  onShowSizeChange={(current, size) => this.handlePaginationLimitChange(current, size)}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

function mapStateToProps({
                           homeStore,
                         }) {
  return {
    elasticSearchData: homeStore.elasticSearchData,
    elasticSearchQueryParams: homeStore.elasticSearchQueryParams,
    elasticSearchDefaultQueryParams: homeStore.elasticSearchDefaultQueryParams,
    elasticSearchDetailsData: homeStore.elasticSearchDetailsData,
    allUniqueTendersData: homeStore.allUniqueTendersData,
    allUniqueSuppliersData: homeStore.allUniqueSuppliersData,
    allUniqueItemTypesData: homeStore.allUniqueItemTypesData,
    allUniqueArticlesData: homeStore.allUniqueArticlesData,
    allProvidersAndTrademarksData: homeStore.allProvidersAndTrademarksData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getElasticSearch: bindActionCreators(getElasticSearch, dispatch),
    setSearchQueryParams: bindActionCreators(setSearchQueryParams, dispatch),
    getElasticDetailSearch: bindActionCreators(getElasticDetailSearch, dispatch),
    clearElasticDetailSearch: bindActionCreators(clearElasticDetailSearch, dispatch),
    getAllUniqueItemsType: bindActionCreators(getAllUniqueItemsType, dispatch),
    getAllUniqueSuppliers: bindActionCreators(getAllUniqueSuppliers, dispatch),
    getAllUniqueTenders: bindActionCreators(getAllUniqueTenders, dispatch),
    getAllUniqueArticles: bindActionCreators(getAllUniqueArticles, dispatch),
    getAllProvidersAndTrademarks: bindActionCreators(getAllProvidersAndTrademarks, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage)
