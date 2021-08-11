import React from "react";
import { Container } from "semantic-ui-react";
import { Grid, Image, Rail, Segment } from "semantic-ui-react";
import JobAdvertisement from "../pages/JobAdvertisement";
import { Route } from "react-router";
import JobAdvertisementAdd from "../pages/jobAdvertisement/JobAdvertisementAdd";
import JobAdvertisementDetails from "../pages/jobAdvertisement/JobAdvertisementDetails";
import "../css/main.css";
import EmployerInfo from "../pages/employer/EmployerInfo";
import Sidebar from "./Sidebar";
import "../css/Dashboard/dashboard.css";
import Leftbar from "./Leftbar";
export default function Dashboard() {
  return (
    <div>
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment>
            <Container className="main">
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Route exact path="/" component={JobAdvertisement}></Route>
                    <Route
                      exact
                      path="/jobadvertisement"
                      component={JobAdvertisement}
                    ></Route>
                    <Route
                      exact
                      path="/jobadvertisement/add"
                      component={JobAdvertisementAdd}
                    ></Route>
                    <Route
                      path="/jobadvertisements/:id"
                      component={JobAdvertisementDetails}
                    ></Route>
                    <Route
                      path="/employer/:id"
                      component={EmployerInfo}
                    ></Route>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>

            <Rail position="left">
              <Segment><Leftbar/></Segment>
            </Rail>

            <Rail position="right">
              <Segment>
                <Sidebar />
              </Segment>
            </Rail>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
