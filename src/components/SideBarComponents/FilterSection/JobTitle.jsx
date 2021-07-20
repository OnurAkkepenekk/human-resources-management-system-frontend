import React, { useState, useEffect } from "react";
import JobTitleService from "../../../services/jobTitle";
import { Dropdown } from "semantic-ui-react";
export default function Job() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();

    jobTitleService.getJobs().then((result) => setJobs(result.data.data));

    console.log(jobs)
  }, []);
  return (
    <div>
      <Dropdown text="Job Titles" search selection>
        <Dropdown.Menu>
          {jobs.map((job) => (
            <Dropdown.Item key={job.id}>{job.jobTitle}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
