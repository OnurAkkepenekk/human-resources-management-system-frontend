import React, { useEffect, useState } from "react";
import { Form, Select, Button, Alert, Input, Modal } from "antd";
import CityService from "../../services/cityService";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import JobTitleService from "../../services/jobTitle";
import WorkTimeTypeService from "../../services/workTimeTypeService";
import WorkTypeService from "../../services/workTypeService";
import JobAdvertisementService from "../../services/jobAdvertisement";
const { Option } = Select;
const JobAdvertisementAdd = () => {
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [workTimeTypes, setWorkTimeTypes] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);

  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then(result => setCities(result.data.data));

    let jobPositionService = new JobTitleService();
    jobPositionService
      .getJobs()
      .then((result) => setJobPositions(result.data.data));

    let workTimeTypeService = new WorkTimeTypeService();
    workTimeTypeService
      .getWorkTimeTypes()
      .then((result) => setWorkTimeTypes(result.data.data));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));
  }, [])
  const options = (cities.map(city => {
    return (<Option key={city.id} value={city.id}>{city.cityName}</Option>)
  }))
  let initialValues = {
    employerId: 1,
    cityId: "",
    jobPositionId: "",
    workTypeId: "",
    workTimeTypeId: "",
    publishDate: moment().format("YYYY-MM-DD"),
    maxSalary: "",
    minSalary: "",
    openPositionCount: "",
    lastApplyDate: "",
    jobDescription: "",
    isActive: true,
  }
  const { getFieldProps, handleSubmit, setFieldValue, touched, errors } = useFormik({
    initialValues: { initialValues },
    onSubmit(values) {
      console.log("values geldi ekleme işlemine hazr")
      initialValues = values
      const jobAdvertisement = {
        active: values.initialValues.isActive,
        city: { id: values.cityId },
        jobPosition: { id: values.jobPositionId },
        employer: { id: values.initialValues.employerId },
        jobDescription: values.jobDescription,
        lastApplyDate: values.lastApplyDate,
        maxSalary: values.maxSalary,
        minSalary: values.minSalary,
        openPositionCount: values.openPositionCount,
        workTimeType: { workTimeTypeId: values.workTimeTypeId },
        workType: { workTypeId: values.workTypeId },
        publishDate: values.initialValues.publishDate,
      };
      jobAdvertisementService.add(jobAdvertisement).then(response => {
        console.log(response);
        Modal.success({
          title: response.data.message,
          content: response.data.message
        });
      }).catch(error => {
        console.log(error)
        Modal.error({
          title: error.data.message,
          content: error.data.message
        });
      })

    },
    validationSchema: Yup.object().shape({
      cityId: Yup.string().typeError("Fill in the field").required("CityId cannot be empty!"),
      jobPositionId: Yup.number().required("Fill in the field").typeError("sayı girin"),
      workTypeId: Yup.number().required("Fill in the field"),
      workTimeTypeId: Yup.number().required("Fill in the field"),
      maxSalary: Yup.number().required("Fill in the field").test('Is positive?', 'Amount must be a positive number', (value) => value > 0),
      minSalary: Yup.number().required("Fill in the field").test('Is positive?', 'Amount must be a positive number', (value) => value > 0),
      lastApplyDate: Yup.date().required("Fill in the field"),
      jobDescription: Yup.string().required("Fill in the field"),
      openPositionCount: Yup.number().required("Fill in the field").typeError('Amount must be a number'),
    })
  })
  return (

    <Form onFinish={handleSubmit} labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" size="large" >
      <div><h2 style={{ margin: "1rem" }}>Add New Job Advertisement</h2></div>
      <Form.Item label="Job Position" required  >
        <Select placeholder="Choose a job position"
          onChange={value => setFieldValue('jobPositionId', value)}>
          {
            jobPositions.map((jobPosition) => (
              <Option key={jobPosition.id} value={jobPosition.id}>
                {jobPosition.jobTitle}
              </Option>
            ))
          }
        </Select>
        {!touched.jobPositionId && errors.jobPositionId ? <Alert message={errors.jobPositionId} type="error" showIcon /> : null}
      </Form.Item>
      <Form.Item label="City" required>
        <Select
          placeholder="Choose a city"
          onChange={value => setFieldValue('cityId', value)}
        >
          {options}
        </Select>
        {!touched.cityId && errors.cityId ? <Alert message={errors.cityId} type="error" showIcon /> : null}
      </Form.Item>
      <Form.Item required label="Work type">
        <Select placeholder="Choose a work type"
          onChange={value => setFieldValue('workTypeId', value)}>
          {
            workTypes.map((workType) => (
              <Option key={workType.workTypeId} value={workType.workTypeId}>
                {workType.workTypeName}
              </Option>
            ))
          }
        </Select>
        {!touched.workTypeId && errors.workTypeId ? <Alert message={errors.workTypeId} type="error" showIcon /> : null}
      </Form.Item>

      <Form.Item required label="Work type">
        <Select placeholder="Choose a work time type"
          onChange={value => setFieldValue('workTimeTypeId', value)} >
          {
            workTimeTypes.map((workTimeType) => (
              <Option
                key={workTimeType.workTimeTypeId} value={workTimeType.workTimeTypeId}
              >
                {workTimeType.workTimeTypeName}
              </Option>
            ))
          }
        </Select>
        {!touched.workTimeTypeId && errors.workTimeTypeId ? <Alert message={errors.workTimeTypeId} type="error" showIcon /> : null}
      </Form.Item>
      <Form.Item required label="Minimum salary">
        <Input {...getFieldProps("minSalary")} name="minSalary" />
        {touched.minSalary && errors.minSalary ? <Alert message={errors.minSalary} type="error" showIcon /> : null}
      </Form.Item>
      <Form.Item required label="Maximum salary">
        <Input {...getFieldProps("maxSalary")} />
        {touched.maxSalary && errors.maxSalary ? <Alert message={errors.maxSalary} type="error" showIcon /> : null}
      </Form.Item>
      <Form.Item required label="Last Apply Date">
        <Input {...getFieldProps("lastApplyDate")} type="date" name="lastApplyDate" required />
        {touched.lastApplyDate && errors.lastApplyDate ? <Alert message={errors.lastApplyDate} type="error" showIcon /> : null}
      </Form.Item>
      <Form.Item required label="Description" >
        <Input {...getFieldProps("jobDescription")} name="jobDescription" />
        {touched.jobDescription && errors.jobDescription ? <Alert message={errors.jobDescription} type="error" showIcon /> : null}
      </Form.Item>
      <Form.Item required label="openPositionCount" >
        <Input {...getFieldProps("openPositionCount")} name="openPositionCount" />
        {touched.openPositionCount && errors.openPositionCount ? <Alert message={errors.openPositionCount} type="error" showIcon /> : null}
      </Form.Item>
      <Form.Item >
        <Button onClick={handleSubmit}>Ekle</Button>
      </Form.Item>

    </Form>
  )
}
export default JobAdvertisementAdd;