import axios from "axios";

export default class ForeignLanguageService {
  getForeignLanguagesByCvId(cvId) {
    return axios.get(
      "http://localhost:8080/api/foreignlanguage/getForeignLanguageListByCvId?cvId=" +
        cvId
    );
  }
}
