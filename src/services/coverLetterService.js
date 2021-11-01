import axios from "axios";

export default class CoverLetterService {
  getCoverLetterByCvId(cvId) {
    return axios.get(
      "http://localhost:8080/api/coverletter/getCoverLetterByCvId?cvId=" + cvId
    );
  }
}
