import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import './FullScreenSpinner.css'

class FullScreenSpinner extends Component {
  getStatus = () => {
    const {
      elasticSearchDataIsFetching,
      elasticSearchDetailsDataIsFetching,
      allUniqueItemTypesDataIsFetching,
      allUniqueSuppliersDataIsFetching,
      allUniqueTendersDataIsFetching,
      allUniqueArticlesDataIsFetching,
      allProvidersAndTrademarksDataIsFetching,
    } = this.props

    return elasticSearchDataIsFetching ||
      elasticSearchDetailsDataIsFetching ||
      allUniqueItemTypesDataIsFetching ||
      allUniqueSuppliersDataIsFetching ||
      allUniqueTendersDataIsFetching ||
      allUniqueArticlesDataIsFetching ||
      allProvidersAndTrademarksDataIsFetching
  }

  render() {
    return (
      <Spin className="FullScreenSpinner" spinning={this.getStatus()} size="large">
        {this.props.children}
      </Spin>
    )
  }
}

function mapStateToProps({
                           homeStore,
                         }) {
  return {
    elasticSearchDataIsFetching: homeStore.elasticSearchDataIsFetching,
    elasticSearchDetailsDataIsFetching: homeStore.elasticSearchDetailsDataIsFetching,
    allUniqueItemTypesDataIsFetching: homeStore.allUniqueItemTypesDataIsFetching,
    allUniqueSuppliersDataIsFetching: homeStore.allUniqueSuppliersDataIsFetching,
    allUniqueTendersDataIsFetching: homeStore.allUniqueTendersDataIsFetching,
    allUniqueArticlesDataIsFetching: homeStore.allUniqueArticlesDataIsFetching,
    allProvidersAndTrademarksDataIsFetching: homeStore.allProvidersAndTrademarksDataIsFetching,
  }
}

export default connect(
  mapStateToProps,
)(FullScreenSpinner)