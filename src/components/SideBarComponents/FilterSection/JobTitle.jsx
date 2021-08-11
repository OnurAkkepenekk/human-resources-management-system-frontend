import React, { useState, useEffect } from "react";
import JobTitleService from "../../../services/jobTitle";
import { Dropdown } from "semantic-ui-react";
export default function Job() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService.getJobs().then((result) => setJobs(result.data.data));
  }, []);

  const stateOptions = jobs.map((job) => ({
    key: job.id,
    text: job.jobTitle,
    value: job.id,
  }));
  return (
    <div>
      <Dropdown
        placeholder="Select Job"
        search
        selection
        options={stateOptions}
      ></Dropdown>
    </div>
  );
}
