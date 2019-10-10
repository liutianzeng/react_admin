import React, {Component} from 'react';
import Login from './login-form'
import './login.css'
// import {Form} from 'antd';

/*登录的路由组件*/
class Login_Page extends Component {
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2 className="login-content-header">用户登录</h2>
                    <Login></Login>
                </section>
            </div>
        );
    }
}

export default Login_Page;