import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { Checkbox, Alert } from 'antd';
import Login from 'components/Login';
import styles from './LoginPage.less';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

@connect(({ login, loading }) => ({
  login,
}))
export default class LoginPage extends Component {
  state = {
    type: 'account',
    autoLogin: true,
  };

  onTabChange = type => {
    this.setState({ type });
  };

  handleSubmit = (err, values) => {
    const { type } = this.state;
    const { dispatch } = this.props;
    if (!err) {
      dispatch({
        type: 'login/login',
        payload: {
          ...values,
          type,
        },
      });
    }
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => {
    return <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />;
  };

  render() {
    const { login = {} } = this.props;
    const { type, autoLogin } = this.state;
    return (
      <DocumentTitle title="登录页面">
        <div className={styles.loginBox}>
          <div className={styles.main}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <span className={styles.title}>On Momoent</span>
                </Link>
              </div>
              <div className={styles.desc}>OnMoment 管理后台</div>
            </div>
            <Login defaultActiveKey={type} onTabChange={this.onTabChange} onSubmit={this.handleSubmit}>
              <Tab key="account" tab="账户密码登录">
                {login.status === 'error' &&
                  login.type === 'account' &&
                  this.renderMessage('账户或密码错误（admin/888888）')}
                <UserName name="userName" placeholder="admin/user" />
                <Password name="password" placeholder="888888/123456" />
              </Tab>
              <Tab key="mobile" tab="手机号登录">
                {login.status === 'error' &&
                  login.type === 'mobile' &&
                  this.renderMessage('验证码错误')}
                <Mobile name="mobile" />
                <Captcha name="captcha" />
              </Tab>
              <div>
                <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
                  自动登录
                </Checkbox>
                <a style={{ float: 'right' }} href="">
                  忘记密码
                </a>
              </div>
              <Submit>登录</Submit>
            </Login>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
