import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobAdvertisementService from "../../services/jobAdvertisement";
export default function JobAdvertisementDetails() {
  //parametreleri obje olarak verir
  let { id } = useParams();
  const [advertisementDetail, setAdvertisementDetail] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementById(id)
      .then((result) => setAdvertisementDetail(result.data.data));
  }, []);
  return <div>{console.log(advertisementDetail)}
  
  
  
  </div>;
}
