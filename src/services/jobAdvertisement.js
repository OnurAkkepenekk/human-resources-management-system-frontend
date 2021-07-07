import axios from "axios";

export default class JobAdvertisementService {
  getJobAdvertisement() {
    return axios.get("http://localhost:8080/api/jobadvertisements/getAll");
  }
  add(jobAdvert) {
    return axios.post(
      "http://localhost:8080/api/jobadvertisements/add",
      jobAdvert
    );
  }
  changeJobAdvertisementStatus(advertisementId, employerId) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/changeStatus?advertisementId=" +
        advertisementId +
        "&employer_Id=" +
        employerId
    );
  }
  findByIsActiveTrueOrderByPublishDate() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/findByIsActiveTrueOrderByPublishDate"
    );
  }
  findByIsActiveTrueAndEmployer_Id(employerId) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/finfByIsActiveTrueAndEmployer_Id?employer_Id=" +
        employerId
    );
  }
}
