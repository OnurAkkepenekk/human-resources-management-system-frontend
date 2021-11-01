import axios from "axios";

export default class LinkService {
  getLinksByCvId(cvId) {
    return axios.get(
      "http://localhost:8080/api/links/getLinksByCvId?cvId=" + cvId
    );
  }
}
