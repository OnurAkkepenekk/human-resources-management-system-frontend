import HRMSTextInput from "../../utilities/customFormControls/HRMSTextInput";
import React, { useEffect, useState } from "react";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Segment, FormField } from "semantic-ui-react";
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
      .getJobs()
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

  const initialValues = {
    employerId: 1,
    cityId: "",
    jobPositionId: "",
    workTypeId: "",
    workTimeTypeId: "",
    publishDate: moment().format("YYYY-MM-DD"),
    maxSalary: "",
    minSalary: "",
    openPositionCount: "",
    lastApplyDate: "",
    jobDescription: "",
    isActive: true,
  };

  const schema = Yup.object({
    cityId: Yup.number().required("Alanı doldurun"),
    jobPositionId: Yup.number().required("Alanı doldurun"),
    workTypeId: Yup.number().required("Alanı doldurun"),
    workTimeTypeId: Yup.number().required("Alanı doldurun"),
    maxSalary: Yup.number().required("Alanı doldurun"),
    minSalary: Yup.number().required("Alanı doldurun"),
    lastApplyDate: Yup.date().required("Alanı doldurun"),
    jobDescription: Yup.string().required("Alanı doldurun"),
    openPositionCount: Yup.number().required("Alanı doldurun"),
  });

  return (
    <div>
      <h1>Add new job advertisement</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          const jobAdvertisement = {
            active: values.isActive,
            city: { id: values.cityId },
            jobPosition: { id: values.jobPositionId },
            employer: { id: values.employerId },
            jobDescription: values.jobDescription,
            lastApplyDate: values.lastApplyDate,
            maxSalary: values.maxSalary,
            minSalary: values.minSalary,
            openPositionCount: values.openPositionCount,
            workTimeType: { workTimeTypeId: values.workTimeTypeId },
            workType: { workTypeId: values.workTypeId },
            publishDate: values.publishDate,
          };
          jobAdvertisementService.add(jobAdvertisement);
        }}
      >
        {(formik) => (
          <Form className="ui form" onSubmit={formik.handleSubmit}>
            <FormField
              name="jobPositionId"
              placeholder="Position"
              control="select"
              onChange={formik.handleChange}
            >
              <option value="" disabled>
                Select position
              </option>
              {jobPositions.map((jobPosition) => (
                <option key={jobPosition.id} value={jobPosition.id}>
                  {jobPosition.jobTitle}
                </option>
              ))}
            </FormField>
            <FormField
              name="cityId"
              placeholder="city"
              control="select"
              onChange={formik.handleChange}
            >
              <option value="" disabled>
                Select city
              </option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.cityName}
                </option>
              ))}
            </FormField>
            <FormField
              name="workTypeId"
              placeholder="workTypeId"
              control="select"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled>
                Select work type
              </option>
              {workTypes.map((workType) => (
                <option key={workType.workTypeId} value={workType.workTypeId}>
                  {workType.workTypeName}
                </option>
              ))}
              ;
            </FormField>

            <FormField
              name="workTimeTypeId"
              placeholder="workTimeTypeId"
              control="select"
              onChange={formik.handleChange}
            >
              <option value="" disabled>
                Select work time type
              </option>
              {workTimeTypes.map((workTimeType) => (
                <option
                  key={workTimeType.workTimeTypeId}
                  value={workTimeType.workTimeTypeId}
                >
                  {workTimeType.workTimeTypeName}
                </option>
              ))}
              ;
            </FormField>
            <div className="col-md-4" style={{ display: "inline-block" }}>
              <HRMSTextInput
                name="minSalary"
                placeholder="Minimum salary"
              ></HRMSTextInput>
            </div>
            <div className="col-md-4" style={{ display: "inline-block" }}>
              <HRMSTextInput
                name="maxSalary"
                placeholder="Maximum Salary"
              ></HRMSTextInput>
            </div>
            <div className="col-md-4" style={{ display: "inline-block" }}>
              <HRMSTextInput
                name="lastApplyDate"
                placeholder="Last Apply Date"
                type="date"
              ></HRMSTextInput>
            </div>
            <div className="col-md-12">
              <HRMSTextInput
                name="jobDescription"
                placeholder="Job Description"
                type="text"
              ></HRMSTextInput>
            </div>
            <div className="col-md-4">
              <HRMSTextInput
                name="openPositionCount"
                placeholder="Open Position Count"
              ></HRMSTextInput>
            </div>
            <Button color="green" type="submit">
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
