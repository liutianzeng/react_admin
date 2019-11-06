import React, {Component} from 'react';
import storage from '../../utils/storageUtil'
import {Redirect,Link,Route,Switch,BrowserRouter} from 'react-router-dom'
import {Layout} from "antd"
import LeftNav from "../../components/left-nav"
import HeaderNav from "../../components/header"
import Home from "../home"
import Product from "../product"
import Role from "../roles"
import User from "../user"
import Category from "../category"
import Bar from "../charts/bar"
import Line from "../charts/line"
import Pie from "../charts/pie"
import NavFooter from "../../components/nav-footer"
/*
管理的路由界面
*/

const {Footer,Content,Sider,Header}=Layout;
class Admin extends Component{
    render(){
        const user=storage.getUser();
        if(!user){
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{height:'100%'}}>
                <Sider >
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                        <Header style={{backgroundColor:"#fff",height:"80px",padding:"0"}}>
                            <HeaderNav></HeaderNav>
                        </Header>
                        <Content style={{border:"solid 20px grey"}}>
                            <Switch>
                                <Route exact path="/" component={Home}></Route>
                                <Route path="/category" component={Category}></Route>
                                <Route path="/product" component={Product}></Route>
                                <Route path="/roles" component={Role}></Route>
                                <Route path="/user" component={User}></Route>
                                <Route path="/charts/bar" component={Bar}></Route>
                                <Route path="/charts/line" component={Line}></Route>
                                <Route path="/charts/pie" component={Pie}></Route>
                            </Switch>

                        </Content>
                        <Footer style={{backgroundColor:"grey"}}>
                            <NavFooter></NavFooter>
                        </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Admin;