import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../services/jobAdvertisement";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default function JobAdvertisement() {
  let jobAdvertisementService = new JobAdvertisementService();

  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    jobAdvertisementService
      .getJobAdvertisement()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      JobAdvertisement
      {console.log(jobAdvertisements)}
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Description</Table.HeaderCell>
            <Table.HeaderCell>Publish Date</Table.HeaderCell>
            <Table.HeaderCell>Minimum Salary</Table.HeaderCell>
            <Table.HeaderCell>Maximum Salary</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
            <Table.HeaderCell>Last Apply Date</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvert) => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvert.publishDate}</Table.Cell>
              <Table.Cell>{jobAdvert.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvert.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdvert.lastApplyDate}</Table.Cell>
              <Table.Cell><Link to={`/jobadvertisements/${jobAdvert.id}`}>Review</Link></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
