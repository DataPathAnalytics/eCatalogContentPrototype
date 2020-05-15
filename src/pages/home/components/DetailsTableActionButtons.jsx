import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Popover, Row, Col } from 'antd'

class DetailsTableActionButtons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible })
  }

  renderPopoverContent = () => {
    const { tableData } = this.props
    return (
      <Row>
        <Row style={{ marginBottom: 10 }}>
          <Col span={24} key={`col_preview_button_${tableData.id}`} style={{textAlign: 'center'}}>
            <Button
              icon='read'
              // style={{ width: '100%' }}
              onClick={() => {
                this.setState({
                  visible: false,
                }, () => {
                  this.props.handlePreviewDetails(tableData)
                })
              }}
              key={`view_button_${tableData.id}`}
            >
              View Details
            </Button>
          </Col>
        </Row>
        {/*<Row>*/}
          {/*<Col span={24} key={`col_delete_button__${tableData.id}`}>*/}
            {/*<Button*/}
              {/*icon="delete"*/}
              {/*style={{ width: '100%' }}*/}
              {/*onClick={() => {*/}
                {/*this.setState({*/}
                  {/*visible: false,*/}
                {/*}, () => {*/}
                  {/*this.props.handleConvertToPDF(tableData)*/}
                {/*})*/}
              {/*}}*/}
              {/*key={`convert_button_${tableData.id}`}*/}
            {/*>*/}
              {/*Save to PDF*/}
            {/*</Button>*/}
          {/*</Col>*/}
        {/*</Row>*/}
      </Row>
    )
  }

  render() {
    return this.renderPopoverContent()
    // return (
    //   <div className="checklist-action-button">
    //     <Popover
    //       content={this.renderPopoverContent()}
    //       trigger="click"
    //       placement="bottomRight"
    //       visible={this.state.visible}
    //       onVisibleChange={this.handleVisibleChange}
    //     >
    //       <Button icon="setting" />
    //     </Popover>
    //   </div>
    // )
  }
}

DetailsTableActionButtons.propTypes = {
  tableData: PropTypes.object.isRequired,
  handlePreviewDetails: PropTypes.func,
  handleConvertToPDF: PropTypes.func,
}

export default DetailsTableActionButtons