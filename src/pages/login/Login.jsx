import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "../../css/Login/login.css"
const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <h1>Login Page</h1>
            <Form
                name="normal_login"
                className="login-form"
                labelCol={{ span: 8 }}
                wrapperCol={{ offset: 8, span: 8 }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
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
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="/register">register now!</a>
                </Form.Item>
            </Form>
        </>
    );
};


export default LoginForm;

