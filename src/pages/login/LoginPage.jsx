import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  loginUser,
  clearLoginError,
} from '../../redux/action/auth/AuthActions'
import { Form, Icon, Input, Button, message } from 'antd'

import './LoginPage.css'

class LoginPage extends Component {
  constructor() {
    super()

    this.state = {
      showError: true,
    }
  }

  componentWillUnmount() {
    this.props.clearLoginError()
    message.destroy()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.loginUser(values)
      }
    })
  }

  changeShowErrorToFalse = () => {
    this.setState({
      showError: false,
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="LoginPage">
        {(this.props.loginFailed && this.state.showError) && (message.error('"The username or password you entered is incorrect"', 0) && this.changeShowErrorToFalse())}
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please enter your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please enter a password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"
                     placeholder="Password" />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

function mapStateToProps({
                           auth,
                         }) {
  return {
    loginFailed: auth.loginFailed,
    resetSendEmailDataErrorMessage: auth.resetSendEmailDataErrorMessage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
    clearLoginError: bindActionCreators(clearLoginError, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form.create({ name: 'LoginForm' })(LoginPage))
