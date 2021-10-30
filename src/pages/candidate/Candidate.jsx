import React, { useState, useEffect } from "react";
import CandidateService from "../../services/candidateService";
import Cvs from "../cv/cvMainPage/Cvs";


export default function Candidate() {
  const [candidates, setCandidates] = useState();

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getCandidates().then((result) =>
      setCandidates(result.data.data)
    );
  }, []);

  return (<div>
    <Cvs></Cvs>
    {console.log(candidates)}
  </div>);
}
