import { Form, Input, DatePicker, Select, Button, notification } from 'antd';
import moment from "moment";
import CandidateService from '../../services/candidateService';
import { SmileOutlined } from '@ant-design/icons';


const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select time!',
        },
    ],
};
const openNotification = (placement, message, status) => {
    notification[status]({
        message: `${status.toUpperCase()}`,
        description: message,
        placement,
    });
};
const CandidateRegister = () => {

    const onFinish = (fieldsValue) => {
        let candidateService = new CandidateService();
        fieldsValue.user.birthDate = moment(fieldsValue.user.birthDay).format("YYYY-MM-DD");
        console.log(fieldsValue);
        // console.log(moment(fieldsValue.user.birthDay).format("YYYY-MM-DD"));
        candidateService.add(fieldsValue.user).then((response) => {
            console.log(response);
            openNotification("bottomRight", response.data.message, "success");
        }).catch(error => {
            openNotification("bottomRight", error.response.data.message, "error");
        })
    };

    return (
        <>
            <h2>Let's get started</h2>
            <h4>First, create your hrms.com account. Have an account?<a href='/login' style={{ textDecoration: 'underline' }}> Log in</a></h4>

            <Form {...layout} name="register" labelCol={{ span: 5, }} wrapperCol={{ span: 15, }} layout="horizontal" size="large" onFinish={onFinish} style={{ marginTop: 50 }}>
                <Form.Item
                    name={['user', 'firstName']}
                    label="First Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your first name!"
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'lastName']}
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your last name!"
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'identityNumber']}
                    label="Identity Number"
                    rules={[
                        {
                            required: true,
                            message: "Please input your identity number!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: "Please input your email!",
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
                <Form.Item name={['user', "birthDate"]} label="Birth Date" {...config}>
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name={['user', "gender"]}
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select >
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
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
export default CandidateRegister;