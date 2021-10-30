import { useEffect, useState } from "react";
import { Button, Icon, Segment } from "semantic-ui-react";
import City from "../components/SideBarComponents/FilterSection/City";
import Job from "../components/SideBarComponents/FilterSection/JobTitle";
import WorkTimeFilter from "../components/SideBarComponents/FilterSection/WorkTimeFilter";
import WorkTypeFilter from "../components/SideBarComponents/FilterSection/WorkTypeFilter";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitle";
import WorkTimeTypeService from "../services/workTimeTypeService";
import WorkTypeService from "../services/workTypeService";

const Filter = ({ setSelectCity, setSelectPosition, setWorkType, setWorkTimeType, ...props }) => {
  const [cities, setCities] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [workTimeTypes, setWorkTimeTypes] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);

  useEffect(() => {
    loadWorkTypes();
  }, []);
  useEffect(() => {
    loadWorkTimeTypes();
  }, []);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
    console.log(cities);
  }, []);
  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService.getJobs().then((result) => setJobs(result.data.data));
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

  const loadWorkTimeTypes = async () => {
    let workTimeTypeService = new WorkTimeTypeService();
    try {
      await workTimeTypeService.getWorkTimeTypes().then((result) => {
        setWorkTimeTypes(result.data.data);
      });
    } catch (error) { }
  };

  return (
    <Segment.Group horizontal>
      <Segment>
        <City cities={cities} setSelectCity={setSelectCity} />
        <Job jobs={jobs} setSelectPosition={setSelectPosition} />
        <WorkTimeFilter workTimeTypes={workTimeTypes} setSelectWorkTimeType={setWorkTimeType} />
        <WorkTypeFilter workTypes={workTypes} setSelecWorkType={setWorkType} />
        <Button style={{ marginLeft: 16, height: 50 }}><Icon name="search" inverted circular link />Search</Button>
      </Segment>
    </Segment.Group>
  );
}

export default Filter;