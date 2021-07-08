import axios from "axios";

export default class CVService {
  getCvByCandidateId(id) {
    return axios.get("http://localhost:8080/api/cvs/getcv?candidateId=" + id);
  }
}
