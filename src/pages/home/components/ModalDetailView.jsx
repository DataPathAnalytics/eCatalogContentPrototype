import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import _ from 'lodash'
import { Row, Col, Table, Modal, Descriptions } from 'antd'
import { DETAILS_MODAL_TABLES_OPTIONS, DETAILS_EXLUDED_OPTIONS } from '../HomePageConstants'

import './ModalDetailView.css'

class ModalDetailView extends Component {
  renderTable = (columnOptions) => {
    return (
      <Row>
        <Col span={24}>
          <Table
            key={shortid.generate()}
            bordered
            title={() => (columnOptions.tableTitle)}
            showHeader={false}
            pagination={false}
            dataSource={[this.props.dataSource]}
            columns={columnOptions.tableColumnsOptions}
          />
        </Col>
      </Row>
    )
  }

  renderDescription = (columnOptions) => {
    return (
      <Descriptions
        className={'descriptions'}
        bordered
        title={<span>{columnOptions.tableTitle}</span>}
        key={shortid.generate()}
      >
        {columnOptions.tableColumnsOptions.map((columnOptions) => {
          if(!_.isEmpty(this.props.dataSource[columnOptions.dataIndex])) {
            return (
              <Descriptions.Item
                span={3}
                label={columnOptions.title}
                key={columnOptions.key}
              >
                {this.props.dataSource[columnOptions.dataIndex]}
              </Descriptions.Item>
            )
          } else {
            return ''
          }
        })}
      </Descriptions>
    )
  }

  render() {
    let detailsModalTablesOptions = _.cloneDeep(DETAILS_MODAL_TABLES_OPTIONS)
    let dataSource = _.cloneDeep(this.props.dataSource)

    let temporaryData = {
      tableTitle: 'Catalog-Specific Article Attributes',
      tableColumnsOptions : []
    }

    Object.keys(dataSource).forEach((key) => {
      if(!_.includes(DETAILS_EXLUDED_OPTIONS, key)) {
        temporaryData.tableColumnsOptions.push({
          title: key,
          dataIndex: key,
          key: key,
        })
      }
    })

    detailsModalTablesOptions.push(temporaryData)

    if (this.props.returnOnlyDetails) {
      return detailsModalTablesOptions.map((tableOptions) => (this.renderDescription(tableOptions)))
    } else {
      return (
        <Modal
          title={this.props.dataSource.Title}
          wrapClassName="checklist-modal"
          visible={this.props.visible}
          footer={null}
          onCancel={() => this.props.onCancel(this.props.form)}
          width={window.innerWidth - 300}
          destroyOnClose={true}
          keyboard={false}
          maskClosable={false}
        >
          {detailsModalTablesOptions.map((tableOptions) => (this.renderDescription(tableOptions)))}
        </Modal>
      )
    }
  }
}

ModalDetailView.propTypes = {
  returnOnlyDetails: PropTypes.bool,
  visible: PropTypes.bool,
  dataSource: PropTypes.object,
  onCancel: PropTypes.func,
}


export default ModalDetailView