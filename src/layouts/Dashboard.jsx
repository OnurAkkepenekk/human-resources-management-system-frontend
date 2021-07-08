import React from "react";
import Sidebar from "./Sidebar";
import { Grid } from "semantic-ui-react";
import EmployerList from "../pages/EmployerList";
import JobAdvertisement from "../pages/JobAdvertisement";
import Candidate from "../pages/Candidate";
import Employee from "../pages/Employee";
import JobTitle from "../pages/JobTitle";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar></Sidebar>
          </Grid.Column>
          <Grid.Column width={12}>
            <EmployerList></EmployerList>
            <JobAdvertisement></JobAdvertisement>
            <Candidate></Candidate>
            <Employee></Employee>
            <JobTitle></JobTitle>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
