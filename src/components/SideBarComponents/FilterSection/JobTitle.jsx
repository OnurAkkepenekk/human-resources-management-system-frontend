import React, { useState, useEffect } from "react";
import JobTitleService from "../../../services/jobTitle";
import { Select } from 'antd';
export default function Job() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService.getJobs().then((result) => setJobs(result.data.data));
  }, []);
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a city"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {jobs.map(job => (
          <Option key={job.id} value={job.id}>{job.jobTitle}</Option>
        ))}
      </Select>,
    </div>
  );
}
