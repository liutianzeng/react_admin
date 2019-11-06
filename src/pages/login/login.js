import React, {Component} from 'react';
import {Redirect} from "react-router-dom"
import Login from './login-form'
import './login.css'
import storage from "../../utils/storageUtil";
// import {Form} from 'antd';

/*登录的路由组件*/
class Login_Page extends Component {
    render() {
        const user=storage.getUser();
        if(user){
            return <Redirect to='/'/>
        }
        return (
            <div className="login">
                <header className="login-header">
                    <h1>React项目：后台管理</h1>
                </header>
                <section className="login-content">
                    <h2 className="login-content-header">用户登录</h2>
                    <Login history={this.props.history}></Login>
                </section>
            </div>
        );
    }
}

export default Login_Page;