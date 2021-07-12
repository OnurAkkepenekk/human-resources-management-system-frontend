import React from "react";
import { Menu } from "semantic-ui-react";
import City from "../components/SideBarComponents/FilterSection/City";
import JobTitle from "../components/SideBarComponents/FilterSection/JobTitle"
import JobAdvertisementFilter from "../components/SideBarComponents/FilterSection/JobAdvertisementFilter"
export default function Sidebar() {
  return (
    <div>
      <Menu vertical>
        <Menu.Item className="filter" >
          <City></City>
        </Menu.Item>
        <Menu.Item className="filter">
          <JobTitle></JobTitle>
        </Menu.Item>
        <Menu.Item className="filter">
          <JobAdvertisementFilter/>
        </Menu.Item>
      </Menu>
    </div>
  );
}
