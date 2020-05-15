import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Row, Col, Input, Select, Button } from 'antd'

const { Search } = Input
const { Option } = Select

class FiltersComponent extends Component {
  render() {
    const {
      allSelectedData,
      allUniqueItemTypes,
      allUniqueSuppliers,
      allUniqueTenders,
    } = this.props

    return (
      <div className="site-filter-component">
        <Row>
          <Col span={12}>
          </Col>
          <Col span={12}>
            Tender:
          </Col>
        </Row>
        <Row style={{ marginBottom: 15 }}>
          <Col span={12}>
            <Search
              allowClear
              enterButton
              style={{ width: '95%' }}
              placeholder="input search text"
              onChange={(event) => this.props.handleSelectFilterValue(event.target.value, 'Title.keyword', 'wildcard', true)}
              onSearch={(value) => this.props.handleSelectFilterValue(!_.isEmpty(value) ? `*${value}*` : '', 'Title.keyword', 'wildcard')}
              value={allSelectedData.hasOwnProperty('Title.keyword') ? allSelectedData['Title.keyword'].replace(/\*/g, '') : ''}
            />
          </Col>
          <Col span={12}>
            <Select
              defaultValue=""
              style={{ width: '95%' }}
              onChange={(value) => this.props.handleSelectFilterValue(value, 'Tender.keyword', 'term')}
              value={allSelectedData.hasOwnProperty('Tender.keyword') ? allSelectedData['Tender.keyword'] : ''}
            >
              <Option value="" key={`evaluation_All`}>All</Option>
              {allUniqueTenders.map((itemType) => (
                <Option value={itemType.key} key={itemType.key}>{itemType.key}</Option>))}
            </Select>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            Item Type / Lot:
          </Col>
          <Col span={12}>
            Supplier:
          </Col>
        </Row>
        <Row style={{ marginBottom: 15 }}>
          <Col span={12}>
            <Select
              defaultValue=""
              style={{ width: '95%' }}
              onChange={(value) => this.props.handleSelectFilterValue(value, 'Item Type / Lot.keyword', 'term')}
              value={allSelectedData.hasOwnProperty('Item Type / Lot.keyword') ? allSelectedData['Item Type / Lot.keyword'] : ''}
            >
              <Option value="" key={`evaluation_All`}>All</Option>
              {allUniqueItemTypes.map((itemType) => (
                <Option value={itemType.key} key={itemType.key}>{itemType.key}</Option>))}
            </Select>
          </Col>
          <Col span={12}>
            <Select
              defaultValue=""
              style={{ width: '95%' }}
              onChange={(value) => this.props.handleSelectFilterValue(value, 'Provider.keyword', 'term')}
              value={allSelectedData.hasOwnProperty('Provider.keyword') ? allSelectedData['Provider.keyword'] : ''}
            >
              <Option value="" key={`evaluation_All`}>All</Option>
              {allUniqueSuppliers.map((itemType) => (
                <Option value={itemType.key} key={itemType.key}>{itemType.key}</Option>))}
            </Select>
          </Col>
        </Row>
        <Row style={{ marginBottom: 15 }}>
          <Col span={4}>
            <Button
              type="primary"
              onClick={this.props.handleResetAllFilters}
            >
              Reset filter
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

FiltersComponent.propTypes = {
  allSelectedData: PropTypes.object,
  handleResetAllFilters: PropTypes.func,
  handleSelectFilterValue: PropTypes.func,
  allUniqueTenders: PropTypes.array,
  allUniqueSuppliers: PropTypes.array,
  allUniqueItemTypes: PropTypes.array,
}


export default FiltersComponent