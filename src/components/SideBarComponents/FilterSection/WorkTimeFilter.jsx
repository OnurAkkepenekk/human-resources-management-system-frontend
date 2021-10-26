import React, { useState, useEffect } from "react";
import WorkTimeTypeService from "../../../services/workTimeTypeService";
import { Select } from 'antd';

const WorkTimeFilter = ({ workTimeTypes, setSelectWorkTimeType, ...props }) => {
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
    setSelectWorkTimeType(value);
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
    <div style={{ display: "inline-block", marginLeft: 16 }}>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select work time"
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
      </Select>
    </div>
  );
}
export default WorkTimeFilter;
