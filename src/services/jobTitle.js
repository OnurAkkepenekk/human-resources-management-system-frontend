import axios from "axios";

export default class JobTitleService {
  getJobs() {
    return axios.get("http://localhost:8080/api/jobs/getall");
  }
}
