import axios from "axios";

export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:8080/api/employers/getall");
  }
  getEmployer(id) {
    return axios.get("http://localhost:8080/api/employers/id?id=" + id);
  }
  getEmployerByCompanyName(companyName) {
    return axios.get(
      "http://localhost:8080/api/employers/companyName?companyName=" +
        companyName
    );
  }
  addEmployer(employer) {
    return axios.post("http://localhost:8080/api/employers/add", employer);
  }
}
