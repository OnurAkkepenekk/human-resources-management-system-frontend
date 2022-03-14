import axios from "axios";

export default class JobAdvertisementService {
  getJobAdvertisement() {
    return axios.get("http://localhost:8080/api/jobadvertisements/getAll");
  }
  getJobAdvertisementById(id) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/details/id?id=" + id
    );
  }
  add(jobAdvert) {
    return axios.post(
      "http://localhost:8080/api/jobadvertisements/add",
      jobAdvert
    );
  }
  increaseClickCount(id) {
    return axios.post(
      "http://localhost:8080/api/jobadvertisements/increaseClickCount?id=" + id
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
  findByFilter(cityId, jobId, workTimeTypeId, workTypeId) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/list/search?cityId=" +
        cityId +
        "&jobId=" +
        jobId +
        "&orderByField=id&orderDirection=asc&workTimeTypeId=" +
        workTimeTypeId +
        "&workTypeId=" +
        workTypeId
    );
  }
}
