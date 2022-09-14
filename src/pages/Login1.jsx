
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Card } from "antd";

import '../styles/login.css'

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="right">
      <Card
      title={<div style={{color: 'orange', textAlign: 'center', fontSize: '25px'}}>Login</div>}
      
        style={{
          position: "absolute",
          margin: 230,
          width: 500,
          backgroundColor: "transparent",
          
          
        }}
        bordered={true}
        
      >
        <Form
          layo
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
              { type : 'email', message: "Please enter a valid email ID" }
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email-ID"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{color:"white"}} >Remember me</Checkbox>
            </Form.Item>

            
          </Form.Item>

          <Form.Item>
            <Button
            href= "Signup"
              type="primary"
              htmlType="submit"
              className="login-form-button"
              shape= "round"
            >
              Log in
            </Button> 
           
            <a className="register"  href="Signup">Register now!</a> 
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
