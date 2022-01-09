import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../services/jobAdvertisement";
import { Table, Tag, Spin, Space, } from 'antd';
import { Link } from "react-router-dom";
import Filter from "../layouts/Filter";
export default function JobAdvertisement() {
  let jobAdvertisementService = new JobAdvertisementService();

  const [selectCity, setSelectCity] = useState();
  const [selectPosition, setSelectPosition] = useState();
  const [selectWorkType, setWorkType] = useState();
  const [selectWorkTimeType, setWorkTimeType] = useState();
  const [search, setSearch] = useState(false)
  const [loading, setLoading] = useState(false);
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    getJobAdvertisementWithFilter();
  }, []);
  const getJobAdvertisementWithFilter = () => {

    if (selectCity !== undefined && selectPosition !== undefined && selectWorkTimeType !== undefined && selectWorkType !== undefined && search === true) {
      console.log("Search true")
      console.log(parseInt(selectCity))
      console.log(selectPosition)
      console.log(selectWorkTimeType)
      console.log(selectWorkType)

      jobAdvertisementService.findByFilter(parseInt(selectCity), selectPosition, selectWorkType, selectWorkTimeType).then(result => {
        setJobAdvertisements(result.data.data);
      })
    }
    else {
      jobAdvertisementService
        .getJobAdvertisement()
        .then((result) => {
          setJobAdvertisements(result.data.data);
          console.log(jobAdvertisements)
          setLoading(true);
        });
    }

  }
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
        <Tag color={active === true ? 'green' : 'red'} key={active}>
          {active.toString()}
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
    {console.log(selectCity + "->" + selectPosition + "->" + selectWorkType + "->" + selectWorkTimeType)}
    {
      loading
        ?
        <div>
          <Filter getJobAdvertisementWithFilter={getJobAdvertisementWithFilter} setSearch={setSearch} setSelectCity={setSelectCity} setSelectPosition={setSelectPosition} setWorkType={setWorkType} setWorkTimeType={setWorkTimeType} style={{ padding: 10 }}></Filter>
          <Table columns={columns} dataSource={jobAdvertisements} />
        </div>
        :
        <Space size="middle">
          <Spin size="large" />
        </Space>
    }
  </>
}
