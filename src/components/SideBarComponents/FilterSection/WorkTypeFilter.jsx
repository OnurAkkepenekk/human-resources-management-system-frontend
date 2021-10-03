import React, { useState, useEffect } from "react";
import WorkTypeService from "../../../services/workTypeService";
import { Select } from 'antd';
export default function WorkTypeFilter() {
  const [workTypes, setWorkTypes] = useState([]);
  useEffect(() => {
    loadWorkTypes();
  }, []);
  const loadWorkTypes = async () => {
    let workTypeService = new WorkTypeService();
    try {
      await workTypeService
        .getWorkTypes()
        .then((result) => setWorkTypes(result.data.data));
    } catch (error) { }
    console.log(workTypes);
  };
  const stateOptions = workTypes.map((workType) => ({
    key: workType.workTypeId,
    text: workType.workTypeName,
    value: workType.workTypeId,
  }));
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
        {workTypes.map(workType => (
          <Option key={workType.workTypeId} value={workType.workTypeId}>{workType.workTypeName}</Option>
        ))}
      </Select>,
    </div>
  );
}