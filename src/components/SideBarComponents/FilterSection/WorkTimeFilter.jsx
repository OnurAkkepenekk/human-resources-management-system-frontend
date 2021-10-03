import React, { useState, useEffect } from "react";
import WorkTimeTypeService from "../../../services/workTimeTypeService";
import { Select } from 'antd';
export default function WorkTimeFilter() {
  const [workTimeTypes, setWorkTimeTypes] = useState([]);
  useEffect(() => {
    loadWorkTimeTypes();
  }, []);
  
  const loadWorkTimeTypes = async () => {
    let workTimeTypeService = new WorkTimeTypeService();
    try {
      await workTimeTypeService.getWorkTimeTypes().then((result) => {
        setWorkTimeTypes(result.data.data);
      });
    } catch (error) {}
  };

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
        {workTimeTypes.map(workTimeType => (
          <Option key={workTimeType.workTimeTypeId} value={workTimeType.workTimeTypeId}>{workTimeType.workTimeTypeName}</Option>
        ))}
      </Select>,
    </div>
  );
}
