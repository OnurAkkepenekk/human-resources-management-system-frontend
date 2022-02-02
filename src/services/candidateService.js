import axios from "axios";

export default class CandidateService {
  getCandidates() {
    return axios.get("http://localhost:8080/api/candidate/getall");
  }
  getCandidateById(id) {
    return axios.get("http://localhost:8080/api/candidate/findbyid?id=" + id);
  }
  add(candidate) {
    return axios.post("http://localhost:8080/api/candidate/add", candidate);
  }
  update(candidate){
    return axios.put("http://localhost:8080/api/candidate/update", candidate)
  }
}
