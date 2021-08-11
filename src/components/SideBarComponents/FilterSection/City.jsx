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

  const stateOptions = cities.map((city) => ({
    key: city.id,
    text: city.cityName,
    value: city.id,
  }));

  return (
    <div>
      <Dropdown
        placeholder="Select City"
        search
        selection
        options={stateOptions}
      ></Dropdown>
    </div>
  );
}
