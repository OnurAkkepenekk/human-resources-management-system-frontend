import React, { useState } from 'react'
import { Modal, Button, Form, Input, Select, DatePicker } from 'antd';
import CandidateService from '../../../services/candidateService';
import ResultInfo from '../Result/ResultInfo';

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
const { Option } = Select;

function onChange(value) {
    console.log(`selected ${value}`);

}
const CandidateEditModal = ({ candidateId, candidate, setVisible, visible, ...props }) => {
    const [form] = Form.useForm();
    let candidateService = new CandidateService();
    const [result, setResult] = useState(false);
    const [status, setStatus] = useState();
    const [title, setTitle] = useState();
    const [subTitle, setSubTitle] = useState()


    let initialValues = {
        id: `${candidate.id}`,
        email: `${candidate.email}`,
        firstName: `${candidate.firstName}`,
        lastName: `${candidate.lastName}`,
        identityNumber: `${candidate.identityNumber}`,
        gender: `${candidate.gender}`,
        birthDate: `${candidate.birthDate}`
    }
    const onFinish = (values) => {
        console.log(values);
        let candidate = {
            ...initialValues,
            firstName: values.firstName,
            lastName: values.lastName,
            identityNumber: values.identityNumber,
            email: values.email,
            gender: values.gender,
            birthDate: values.birthDate
        };

        candidateService.update(candidate).then(result => {
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
                title=" Edit Candidate Information"
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
                            name="updateCandidate"
                            onFinish={onFinish}
                            initialValues={initialValues}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="firstName"
                                label="First Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'First name is required',
                                    },
                                ]}
                            >
                                <Input></Input>
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                label="Last Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Last name is required!',
                                    },
                                ]}
                            >
                                <Input
                                />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Email is required',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="identityNumber"
                                label="Identity Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Identity number is required ',
                                    },
                                ]}
                            >
                                <Input></Input>
                            </Form.Item>
                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Gender is required ',
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select your gender"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                >
                                    <Option key="1" value="male">Male</Option>
                                    <Option key="2" value="female">Female</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="birthDate"
                                label="Birth Date"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Birth date is required',
                                    },
                                ]}
                            >
                                <Input disabled />
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
    )
}


export default CandidateEditModal;
