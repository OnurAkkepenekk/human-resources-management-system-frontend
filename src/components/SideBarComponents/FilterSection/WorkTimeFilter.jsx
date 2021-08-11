import React, { useState, useEffect } from "react";
import WorkTimeTypeService from "../../../services/workTimeTypeService";
import { Dropdown } from "semantic-ui-react";

export default function WorkTimeFilter() {
  const [workTimeTypes, setWorkTimeTypes] = useState([]);
  useEffect(() => {
    loadWorkTimeTypes();
  }, []);

  const stateOptions = workTimeTypes.map((workTimeType) => ({
    key: workTimeType.workTimeTypeId,
    text: workTimeType.workTimeTypeName,
    value: workTimeType.workTimeTypeId,
  }));

  const loadWorkTimeTypes = async () => {
    let workTimeTypeService = new WorkTimeTypeService();
    try {
      await workTimeTypeService.getWorkTimeTypes().then((result) => {
        setWorkTimeTypes(result.data.data);
      });
    } catch (error) {}
  };
  return (
    <div>
      <Dropdown
        placeholder="Select Work Time"
        search
        selection
        options={stateOptions}
      ></Dropdown>
    </div>
  );
}
