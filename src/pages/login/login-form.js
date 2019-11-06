import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {reqLogin} from "../../api";
import storage from '../../utils/storageUtil'
import {Redirect} from "react-router-dom"


class LoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        const form=this.props.form;
        form.validateFields(async (err,value)=>{
            if(!err){
                const {username,password}=value;
                const result=await reqLogin(username,password);
                if(result.status===0){
                    console.log("登录成功",result);
                    storage.saveUser(value);
                    this.props.history.replace('./');
                }else{
                    console.log(result.msg);
                }
            }else{
                console.log(err);
            }
        })
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [
                            {message: 'Please input your username!' },
                            {message: 'must less than 10 numbers',max:10 },
                            {message: 'must more than 5 numbers',min:5},
                            {message:"must numbers",pattern:/^[a-zA-Z0-9]*$/}
                        ],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [
                            {required:true,
                                message: 'Please input your Password!'
                            }
                        ],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
const WrapLogin=Form.create()(LoginForm);
export default WrapLogin;