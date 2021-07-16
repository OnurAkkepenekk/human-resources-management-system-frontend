import React, { useState, useEffect } from "react";
import CandidateService from "../services/candidateService";

export default function Candidate() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();

    candidateService.getCandidates().then((result) =>
      setCandidates(result.data.data)
    );
  }, []);

  return <div>
      {candidates}
  </div>;
}
