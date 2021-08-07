import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployerService from "../../services/employerService";
import JobAdvertisementService from "../../services/jobAdvertisement";
import { Table, Grid, Image, Menu, Icon, Segment } from "semantic-ui-react";
import photo from "../../images/alchemy.gif";
import { Link } from "react-router-dom";
export default function EmployerInfo() {
  const [employer, setEmployer] = useState([]);
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  let { id } = useParams();

  const [activeItem, setActiveItem] = useState("adress");

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getEmployer(id).then((result) => {
      setEmployer(result.data.data);
      console.log(employer);
    });

    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .findByIsActiveTrueAndEmployer_Id(id)
      .then((result) => {
        setJobAdvertisements(result.data.data);
        console.log(jobAdvertisements);
      });
  }, []);

  function JobAdvertisementInfo() {
    return (
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Description</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
            <Table.HeaderCell>Work Time Type</Table.HeaderCell>
            <Table.HeaderCell>Work Type</Table.HeaderCell>
            <Table.HeaderCell>Minimum Salary</Table.HeaderCell>
            <Table.HeaderCell>Maximum Salary</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
            <Table.HeaderCell>Publish Date</Table.HeaderCell>
            <Table.HeaderCell>Last Apply Date</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvert) => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvert.jobPosition.jobTitle}</Table.Cell>
              <Table.Cell>{jobAdvert.workTimeType.workTimeTypeName}</Table.Cell>
              <Table.Cell>{jobAdvert.workType.workTypeName}</Table.Cell>
              <Table.Cell>{jobAdvert.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvert.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdvert.publishDate}</Table.Cell>
              <Table.Cell>{jobAdvert.lastApplyDate}</Table.Cell>
              <Table.Cell><Link to={`/jobadvertisements/${jobAdvert.id}`}>Review</Link></Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }

  function ContactInfo() {
    return (
      <div style={{display:"flex"}}>
        <h4 style={{}}><Icon name="mail outline" size='big'></Icon>{employer.email}</h4>
        <h4 style={{}}><Icon name="phone volume" size='big'></Icon>{employer.phoneNumber}</h4>
        <h4>{employer.activated}</h4>
      </div>
    );
  }
  return (
    <div>
      {console.log(employer)}
      {console.log(jobAdvertisements)}
      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={photo} />
          </Grid.Column>
          <Grid.Column width={13}>
            <h1 className="companyName">{employer.companyName}</h1>
            <h3>Şirket tanıtımı eklenmeli</h3>
            <h5>Web site :{employer.webAddress}</h5>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Menu attached="top" tabular>
            <Menu.Item
              name="Adress"
              active={activeItem === "adress"}
              onClick={() => setActiveItem("adress")}
            />
            <Menu.Item
              name="Contact"
              active={activeItem === "contact"}
              onClick={() => setActiveItem("contact")}
            />
            <Menu.Item
              name="Job Advertisement"
              active={activeItem === "jobAdvert"}
              onClick={() => {
                setActiveItem("jobAdvert");
              }}
            ></Menu.Item>
            <Menu.Menu position="right"></Menu.Menu>
          </Menu>
          <Segment attached="bottom">
            {activeItem === "jobAdvert" ? (
              <JobAdvertisementInfo></JobAdvertisementInfo>
            ) : (
              <ContactInfo></ContactInfo>
            )}
          </Segment>
        </Grid.Row>
      </Grid>
    </div>
  );
}
