import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Row, Col, Card, Statistic } from 'antd'

class StatisticComponent extends Component {
  render() {
    const {
      articleData,
      lotData,
      supplierData,
      tendersData,
      itemsData,
    } = this.props

    return (
      <div className="site-statistic-demo-card">
        <Row gutter={16} type="flex">
          <Col style={{width: "20%"}}>
            <Card>
              <Statistic
                // title='Total Amount of "Article"'
                // value={articleData}
                title={articleData}
                value='Total Amount of "Article"'
                // precision={2}
                // valueStyle={{ color: '#3f8600' }}
                // prefix={<ArrowUpOutlined />}
                // suffix="%"
              />
            </Card>
          </Col>
          <Col style={{width: "20%"}}>
            <Card>
              <Statistic
                // title='Total Amount of "Item Type / Lot"'
                // value={lotData}
                title={lotData}
                value='Total Amount of "Item Type / Lot"'
                // precision={2}
                // valueStyle={{ color: '#3f8600' }}
                // prefix={<ArrowDownOutlined />}
                // suffix="%"
              />
            </Card>
          </Col>
          <Col style={{width: "20%"}}>
            <Card>
              <Statistic
                // title='Total Amount of "Supplier"'
                // value={supplierData}
                title={supplierData}
                value='Total Amount of "Supplier"'
                // precision={2}
                // valueStyle={{ color: '#3f8600' }}
                // prefix={<ArrowUpOutlined />}
                // suffix="%"
              />
            </Card>
          </Col>
          <Col style={{width: "20%"}}>
            <Card>
              <Statistic
                // title='Total Amount of "Tenders"'
                // value={tendersData}
                title={tendersData}
                value='Total Amount of "Tenders"'
                // precision={2}
                // valueStyle={{ color: '#3f8600' }}
                // prefix={<ArrowDownOutlined />}
                // suffix="%"
              />
            </Card>
          </Col>
          <Col style={{width: "20%"}}>
            <Card>
              <Statistic
                // title='Total Amount of "Tenders"'
                // value={tendersData}
                title={itemsData}
                value='Total Amount of "Items"'
                // precision={2}
                // valueStyle={{ color: '#3f8600' }}
                // prefix={<ArrowDownOutlined />}
                // suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

StatisticComponent.propTypes = {
  articleData: PropTypes.number,
  lotData: PropTypes.number,
  supplierData: PropTypes.number,
  tendersData: PropTypes.number,
  itemsData: PropTypes.number,
}

export default StatisticComponent