import axios from "axios";

export default class JobExperienceService {

  getJobExperience(id) {
    return axios.get("http://localhost:8080/api/jobexperiences/getjobexperiencesbyuserid?cadidateId=" + id);
  }
  addJobExperience(jobExperience) {
    return axios.post("http://localhost:8080/api/jobexperiences/add", jobExperience);
  }
}
