import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Table, Input, Pagination, List, Typography, Button, Tooltip, notification } from 'antd'
import { DETAILS_TABLE_COLUMNS_OPTIONS } from '../HomePageConstants'

class DetailsTable extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          <Table
            rowKey={'id'}
            bordered
            pagination={false}
            dataSource={this.props.dataSource}
            columns={DETAILS_TABLE_COLUMNS_OPTIONS}
          />
        </Col>
      </Row>
    )
  }
}

DetailsTable.propTypes = {
  dataSource: PropTypes.array,
}


export default DetailsTable