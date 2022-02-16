import { useState } from 'react';
import { Modal, Button, Form, Input, Select, Switch } from 'antd';
import EmployerService from '../../services/employerService';
import ResultInfo from './Result/ResultInfo';
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select
            style={{
                width: 70,
            }}
        >
        </Select>
    </Form.Item>
);

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const EmployerModal = ({ employerId, employer, setVisible, visible, ...props }) => {

    const [form] = Form.useForm();
    let employerService = new EmployerService();
    const [result, setResult] = useState(false);
    const [status, setStatus] = useState();
    const [title, setTitle] = useState();
    const [subTitle, setSubTitle] = useState()

    let initialValues = {
        id: `${employer.id}`,
        email: `${employer.email}`,
        webAddress: `${employer.webAddress}`,
        phoneNumber: `${employer.phoneNumber}`,
        introduction: `${employer.introduction}`,
        companyName: `${employer.companyName}`,
        activated: `${employer.activated}`,
        prefix: `${employer.prefix}`
    }
    const onFinish = (values) => {
        console.log("Helloo")
        console.log(values);
        let employer = {
            ...initialValues,
            companyName: values.companyName,
            webAddress: values.webAddress,
            phoneNumber: values.phoneNumber,
            email: values.email,
            activated: values.activated,
            introduction: values.introduction
        };

        employerService.updateEmployer(employer).then(result => {
            console.log(result)
            setResult(true);
            setStatus("success");
            setTitle("Submission Successful");
            setSubTitle("");
        }, error => {
            setTitle(error);
            setStatus("error");
            setTitle("Submission Failed")
            setResult(true);
            setSubTitle("Cloud server configuration takes 1-5 minutes, please try again.")
        })
    };

    const handleOk = () => {
        setVisible(false)
        window.location.reload(false);
    };
    return (
        <>
            <Modal
                title=" Edit Employer Information"
                centered
                forceRender
                visible={visible}
                onOk={handleOk}
                onCancel={handleOk}
                width={1000}
            >
                {!result ?
                    <>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="updateEmployer"
                            onFinish={onFinish}
                            initialValues={initialValues}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="companyName"
                                label="Company Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input company name!',
                                    },
                                ]}
                            >
                                <Input></Input>
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="phoneNumber"
                                label="Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}
                            >
                                <Input
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="webAddress"
                                label="Web Address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input web adress!',
                                    },
                                ]}
                            >
                                <Input></Input>
                            </Form.Item>

                            <Form.Item
                                name="introduction"
                                label="Introduction"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input Intro',
                                    },
                                ]}
                            >
                                <Input.TextArea showCount maxLength={500} />
                            </Form.Item>
                            <Form.Item label="Active" name="activated" valuePropName="checked" rules={[
                                {
                                    required: true,
                                    message: 'Please input active',
                                },
                            ]}>
                                <Switch />
                            </Form.Item>
                            <Form.Item style={{ display: 'flex', justifyContent: "center", textAlign: 'center' }}>
                                <Button type="primary" htmlType="submit" >
                                    Update
                                </Button>
                            </Form.Item>
                        </Form>
                    </>
                    : <ResultInfo status={status} title={title} subTitle={subTitle}></ResultInfo>
                }
            </Modal>
        </>
    );
};

export default EmployerModal;