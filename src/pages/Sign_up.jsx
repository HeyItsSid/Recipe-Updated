import React, {useState}  from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Card, Modal } from "antd";
import '../styles/signup.css'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
        const navigate= useNavigate();
        const [isModalVisible, setIsModalVisible] = useState(false);


        const [name, setName] = useState("");
        const [pass, setPass] = useState("");
        const [email, setEmail] = useState("");
        const [cpass, setcPass] = useState("");
        

    return (
        <>
        <div className='bgimg'>
            <Card title={<div style={{ color: 'orange', fontSize: '35px', textAlign: "center" }}>SignUp</div>}
                style={{
                    position: "absolute",
                    margin: 200,
                    width: 500,
                    backgroundColor: "transparent",

                }}
                bordered={true}>

                <Form labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
                    <Form.Item name="FullName" label={<label style={{ color: "gold" }}>Full Name:</label>}
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your name!'
                            },
                            { whitespace: true },
                            { min: 3 }
                        ]}
                        hasFeedback
                    >
                        <Input onChange={(e) => setName(e.target.value)} placeholder="Type your name" />
                    </Form.Item>

                    <Form.Item className='email' name="Email" label={<label style={{ color: "gold" }}>Email ID:</label>}
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your email!'
                            },
                            { type: 'email', message: "Please enter a valid email ID" }
                        ]} hasFeedback>
                        <Input onChange={(e) => setEmail(e.target.value)} placeholder="Type your email" />
                    </Form.Item>

                    <Form.Item name="Password" label={<label style={{ color: "gold" }}>Password:</label>}
                        rules={[
                            {
                                required: true,
                                message: 'Required*'
                            },
                            { min: 8 },
                            // {
                            //     validator: (_, value) =>
                            //     value && value.includes(validPassword) ? Promise.resolve() : Promise.reject("Please enter a strong password")

                            // }
                        ]}
                        hasFeedback
                    >
                        <Input.Password onChange={(e) => setPass(e.target.value)} placeholder="Type your password" />
                    </Form.Item>

                    <Form.Item name="ConfPassword" label={<label style={{ color: "gold" }}>Confirm Password:</label>}
                        dependencies={["Password"]}
                        rules={[
                            {
                                required: true,
                                message: 'Required*'
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('Password') == value) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject("Passwords do not match");
                                },
                            }),
                            
                        ]}
                        hasFeedback>



                        <Input.Password onChange={(e) => setcPass(e.target.value)} placeholder="Re-enter your password" />
                    </Form.Item> 

                    <Form.Item>
                        <Button disabled={!name || !pass || !email || !cpass} type="primary"  htmlType="submit" shape="round" size="large" className='signup-form-button' onClick={() => {setIsModalVisible(true);}}>
                            Sign Up     </Button>
                     <Modal 
                            visible={isModalVisible}
                            onOk={() => {
                                navigate(-1);
                            }}
                            okText= "Go to Login"
                            onCancel={()=>{
                                setIsModalVisible(false);
                            }}>

                            <p>Registration successful!!</p>
                        
                            </Modal>
                    </Form.Item>


                </Form>
            </Card>
        </div>
        </>
    )
}

