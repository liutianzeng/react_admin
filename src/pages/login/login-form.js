import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {reqLogin} from "../../api";
import {user} from '../../utils/memory'


class LoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        const form=this.props.form;
        form.validateFields(async (err,value)=>{
            if(!err){
                const {username,password}=value;
                // localStorage.setItem("name",JSON.stringify(value));
                localStorage.removeItem("name");
                const result=await reqLogin(username,password);
                user=result;

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
                            {message: 'must more than 6 numbers',min:6},
                            {message:"must numbers",pattern:/^[0-9]*$/}
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