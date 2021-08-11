import React, { useState, useEffect } from "react";
import WorkTypeService from "../../../services/workTypeService";
import { Dropdown } from "semantic-ui-react";

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
    } catch (error) {}
    console.log(workTypes);
  };
  const stateOptions = workTypes.map((workType) => ({
    key: workType.workTypeId,
    text: workType.workTypeName,
    value: workType.workTypeId,
  }));
  return (
    <div>
      <Dropdown
        placeholder="Select Work Type"
        search
        selection
        options={stateOptions}
      ></Dropdown>
    </div>
  );
}
