import React from "react";
import Sidebar from "./Sidebar";
import { Grid } from "semantic-ui-react";
import EmployerList from "../pages/EmployerList";
import JobAdvertisement from "../pages/JobAdvertisement";
import Candidate from "../pages/Candidate";
import Employee from "../pages/Employee";
import { Route } from "react-router";
import JobAdvertisementAdd from "../pages/jobAdvertisement/JobAdvertisementAdd";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar></Sidebar>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={JobAdvertisement}></Route>
            <Route exact path="/jobadvertisement" component={JobAdvertisement}></Route>
            <Route exact path="/jobadvertisement/add" component={JobAdvertisementAdd}></Route>
            {/* <EmployerList></EmployerList>
            <Candidate></Candidate>
            <Employee></Employee> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
