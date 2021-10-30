import axios from "axios";

export default class EducationInformationService {
  getEducationInformationById(candidateId) {
    console.log(typeof candidateId);
    return axios.get(
      `http://localhost:8080/api/educationinformations/getEducationInformationsByUserId?candidateId=${candidateId}`
    );
  }
}
