import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import JobAdvertisementService from "../../services/jobAdvertisement";
import CityService from "../../services/cityService";
import JobTitleService from "../../services/jobTitle";
import WorkTimeTypeService from "../../services/workTimeTypeService";
import WorkTypeService from "../../services/workTypeService";
import moment from "moment";
export default function JobAdvertisementAdd() {
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [workTimeTypes, setWorkTimeTypes] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  let jobAdvertisementService = new JobAdvertisementService();
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));

    let jobPositionService = new JobTitleService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));

    let workTimeTypeService = new WorkTimeTypeService();
    workTimeTypeService
      .getWorkTimeTypes()
      .then((result) => setWorkTimeTypes(result.data.data));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));
  }, []);

  const getCities = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  const getJobPositions = jobPositions.map((position, index) => ({
    key: index,
    text: position.jobTitle,
    value: position.id,
  }));
  const getWorkTimeTypes = workTimeTypes.map((workTimeType, index) => ({
    key: index,
    text: workTimeType.workTimeTypeName,
    value: workTimeType.workTimeTypeId,
  }));
  const getWorkTypes = workTypes.map((workType, index) => ({
    key: index,
    text: workType.workTypeName,
    value: workType.workTypeId,
  }));

  const JobAdvertisementForm = () => {
    const formik = useFormik({
      initialValues: {
        employerId: 1,
        cityId: "",
        jobPositionId: "",
        workTypeId: "",
        workTimeTypeId: "",
        createDate: moment().format("YYYY-MM-DD"),
        maxSalary: "",
        minSalary: "",
        openPositionCount: "",
        lastApplyDate: "",
        jobDescription: "",
        isActive: true,
      },
    });
  };

  return <div></div>;
}
