import React from "react";
import { Icon, Input, Segment } from "semantic-ui-react";

export default function Sidebar() {
  return (
    <Segment.Group horizontal>
      <Segment>
        <Input
          icon={<Icon name="search" inverted circular link />}
          placeholder="Search..."
        />
      </Segment>
    </Segment.Group>
  );
}
