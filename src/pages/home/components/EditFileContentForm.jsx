import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Input } from 'antd'

class EditFileContentForm extends Component {
  render() {
    const {
      isVisible, onCancel, form,
    } = this.props

    const { getFieldDecorator } = form

    return (
      <Modal
        title={`Edit file: ${this.props.fileName}`}
        okText={'Save'}
        cancelText={'Cancel'}
        visible={isVisible}
        onOk={() => {this.props.onCreate(this.props.form)}}
        onCancel={onCancel}
        keyboard={false}
        maskClosable={false}
        width={window.innerWidth - 300}
        // confirmLoading={this.props.isSpin}
      >
        <Form
          layout="vertical"
          prefixCls="edit_file_content_"
        >
          <Form.Item style={{ marginBottom: 0 }}>
            {getFieldDecorator('fileContent', {
              initialValue: this.props.fileContent,
            })(
              <Input.TextArea rows={Math.round(window.innerHeight / 34)} />,
            )}
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}


EditFileContentForm.propTypes = {
  isVisible: PropTypes.bool,
  onCancel: PropTypes.func,
  onCreate: PropTypes.func,
  fileName: PropTypes.string,
  fileContent: PropTypes.string,
}

export default Form.create({ name: 'EditFileContentForm' })(EditFileContentForm)