import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Layout, Button, Row, Col, Icon } from 'antd'
import { PublicRoutes, AuthenticatedRoutes } from './routes'
import FullScreenSpinner from './components/spiner/FullScreenSpinner'
import { logOutUser } from './redux/action/auth/AuthActions'

const { Header, Content } = Layout

class App extends Component {
  logoutUser = () => {
    this.props.logOutUser().then(() => {
      window.location.pathname = '/'
    })
  }

  renderAuthenticatedPage = () => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <FullScreenSpinner>
          <Layout>
            {/*<Header style={{ background: '#fff', padding: '0 15px' }}>*/}
              {/*<Row type="flex">*/}
                {/*<Col span={24}>*/}
                  {/*<div style={{ float: 'right' }}>*/}
                    {/*<Button type='button' style={{ marginLeft: 5 }}*/}
                            {/*onClick={(e) => this.logoutUser()}>Exit*/}
                      {/*<Icon type="export" />*/}
                    {/*</Button>*/}
                  {/*</div>*/}
                {/*</Col>*/}
              {/*</Row>*/}
            {/*</Header>*/}
            <Content className="App" style={{
              margin: '24px 16px', padding: 24, background: '#fff', minHeight: 'calc(85vh)',
            }}>
              {AuthenticatedRoutes()}
            </Content>
          </Layout>
        </FullScreenSpinner>
      </Layout>
    )
  }

  render() {
    return this.renderAuthenticatedPage()
    // if (this.props.token) {
    //   return this.renderAuthenticatedPage()
    // } else {
    //   return <PublicRoutes />
    // }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOutUser: bindActionCreators(logOutUser, dispatch),
  }
}

function mapStateToProps({
                           auth: {
                             token,
                             userInfo,
                           },
                         }) {
  return {
    token,
    userInfo,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(App))
