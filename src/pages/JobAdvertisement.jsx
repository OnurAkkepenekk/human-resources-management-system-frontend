import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../services/jobAdvertisement";
import { Table, Tag } from 'antd';
import { Link } from "react-router-dom";
export default function JobAdvertisement() {
  let jobAdvertisementService = new JobAdvertisementService();

  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  useEffect(() => {
    jobAdvertisementService
      .getJobAdvertisement()
      .then((result) => {
        setJobAdvertisements(result.data.data);
        console.log(jobAdvertisements)
      });
  }, []);
  const columns = [

    {
      title: 'Company',
      dataIndex: 'companyName',
      key: 'companyName',
      render: text => <Link to={`/employer/${text}`} >{text}</Link>,
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
      dataIndex:'id',
      key:'id',
      render: id => <Link to={`/jobadvertisment/${id}`} >Review</Link>,
    }
  ];
  return <>
    <Table columns={columns} dataSource={jobAdvertisements} />
  </>
}
