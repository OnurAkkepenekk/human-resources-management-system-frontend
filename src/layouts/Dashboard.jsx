import React from "react";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import EmployerList from "../pages/EmployerList";
import JobAdvertisement from "../pages/JobAdvertisement";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <EmployerList></EmployerList>
            <JobAdvertisement></JobAdvertisement>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
