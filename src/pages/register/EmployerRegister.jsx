import { Form, Input, Select, Button } from 'antd';
import EmployerService from '../../services/employerService';

const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const EmployerRegister = () => {
    let employerService = new EmployerService();

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="90">+90</Option>
            </Select>
        </Form.Item>
    );

    const onFinish = (values) => {
        values.user.phoneNumber = values.prefix + values.user.phoneNumber
        console.log(values);
        let employer = values.user;
        console.log(employer);
        employerService.addEmployer(values.user).then(response => {
            console.log(response);

        }).catch(error => {
            console.log(error)
        })
    };
    return (
        <>
            <h2>Let's get started</h2>
            <h4>First, create your hrms.com account. Have an account?<a href='/login' style={{ textDecoration: 'underline' }}> Log in</a></h4>
            <Form {...layout} name="nest-messages" labelCol={{ span: 5, }} wrapperCol={{ span: 15, }} layout="horizontal" size="large" onFinish={onFinish} validateMessages={validateMessages} style={{ marginTop: 50 }}>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name={['user', 'password']}
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name=""
                    label="Confirm Password"
                    dependencies={['user', 'password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue(['user', 'password']) === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name={["user", 'phoneNumber']}
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name={['user', 'companyName']}
                    label="Company Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item name={['user', 'webAddress']} label="Website"
                    rules={[
                        {
                            required: true,
                        },
                    ]} >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Introduction"
                    rules={[
                        {
                            required: true,
                        },
                    ]} >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}


export default EmployerRegister;