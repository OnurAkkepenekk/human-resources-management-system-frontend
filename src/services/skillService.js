import axios from "axios";

export default class SkillService {
  getSkillsByCvId(cvId) {
    return axios.get(
      "http://localhost:8080/api/skillForCV/getSkillsInfoByCvId?cvId=" + cvId
    );
  }
}
