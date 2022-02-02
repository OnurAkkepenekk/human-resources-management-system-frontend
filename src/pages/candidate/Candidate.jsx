import React, { useState, useEffect } from "react";
import CandidateService from "../../services/candidateService";
import Cvs from "../cv/cvMainPage/Cvs";
import CandidateEdit from "./CandidateEdit";
import CandidateInfo from "./CandidateInfo";


export default function Candidate() {
  const [candidates, setCandidates] = useState();

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getCandidates().then((result) =>
      setCandidates(result.data.data)
    );
  }, []);

  return (
    <div>
      <CandidateEdit />
      <Cvs></Cvs>
      {console.log(candidates)}
    </div>
  );
}
