import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../services/jobAdvertisement";
import { Table, Tag, Spin, Space, } from 'antd';
import { Link } from "react-router-dom";
import Filter from "../layouts/Filter";
export default function JobAdvertisement() {
  let jobAdvertisementService = new JobAdvertisementService();
  const [selectCity, setSelectCity] = useState();
  const [selectPosition, setSelectPosition] = useState();
  const [workType, setWorkType] = useState();
  const [workTimeType, setWorkTimeType] = useState();

  const [loading, setLoading] = useState(false);
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  useEffect(() => {
    jobAdvertisementService
      .getJobAdvertisement()
      .then((result) => {
        setJobAdvertisements(result.data.data);
        console.log(jobAdvertisements)
        setLoading(true);
      });
  }, []);
  const columns = [
    {
      dataIndex: 'employerId',
      key: 'employerId',
      render: (text) => (
        <Tag color='blue' key={text}>
          <Link to={`/employer/${text}`} >Company Info</Link>
        </Tag>
      ),
    },
    {
      title: 'Company',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'City',
      dataIndex: 'cityName',
      key: 'cityName',
    },
    {
      title: 'Description',
      dataIndex: 'jobDescription',
      key: 'jobDescription',
    },
    {
      title: 'Position',
      dataIndex: 'jobPosition',
      key: 'jobPosition',
    },
    {
      title: 'Work Time Type',
      dataIndex: 'workTimeTypeName',
      key: 'workTimeTypeName',
    },
    {
      title: 'Work Type',
      dataIndex: 'workTypeName',
      key: 'workTypeName',
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      render: (active) => (
        <Tag color={active === "true" ? 'green' : 'red'} key={active}>
          {active}
        </Tag>
      ),
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: id => <Link to={`/jobadvertisements/details/${id}`} >Review</Link>,
    }
  ];
  return <>
    {console.log(selectCity + "->" + selectPosition + "->" + workType + "->" + workTimeType)}
    {
      loading
        ? <div><Filter setSelectCity={setSelectCity} setSelectPosition={setSelectPosition} setWorkType={setWorkType} setWorkTimeType={setWorkTimeType} style={{ padding: 10 }}></Filter> <Table columns={columns} dataSource={jobAdvertisements} /></div>
        : <Space size="middle">
          <Spin size="large" />
        </Space>
    }
  </>
}
