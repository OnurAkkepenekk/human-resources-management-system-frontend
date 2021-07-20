import React, { useState, useEffect } from "react";
import WorkTimeTypeService from "../../../services/workTimeTypeService";
import WorkTypeService from "../../../services/workTypeService";
import { Dropdown } from "semantic-ui-react";
export default function JobAdvertisementFilter() {
  const [workTypes, setWorkTypes] = useState([]);
  const [workTimeTypes, setWorkTimeTypes] = useState([]);

  useEffect(() => {
    loadWorkTimeTypes();
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
      <Dropdown text="Work Types" search selection>
        <Dropdown.Menu>
          {workTypes.map((workType) => (
            <Dropdown.Item key={workType.work_type_id}>
              {workType.workTypeName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown text="Work Time Types" search selection>
        <Dropdown.Menu>
          {workTimeTypes.map((workTimeType) => (
            <Dropdown.Item key={workTimeType.workTimeTypeId}>
              {workTimeType.workTimeTypeName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
