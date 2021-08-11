import React from "react";
import City from "../components/SideBarComponents/FilterSection/City";
import Job from "../components/SideBarComponents/FilterSection/JobTitle";
import WorkTimeFilter from "../components/SideBarComponents/FilterSection/WorkTimeFilter";
import WorkTypeFilter from "../components/SideBarComponents/FilterSection/WorkTypeFilter";
export default function Leftbar() {
  return (
    <div>
      <City></City>
      <Job></Job>
      <WorkTimeFilter />
      <WorkTypeFilter />
    </div>
  );
}
