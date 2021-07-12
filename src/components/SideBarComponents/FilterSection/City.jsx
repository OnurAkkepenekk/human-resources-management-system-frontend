import React, { useState, useEffect } from "react";
import CityService from "../../../services/cityService";
import { Dropdown } from "semantic-ui-react";
export default function City() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
    console.log(cities);
  }, []);
  return (
    <div>
      <Dropdown text="Cities" search selection>
        <Dropdown.Menu>
          {cities.map((city) => (
            <Dropdown.Item key={city.id}>{city.city}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
