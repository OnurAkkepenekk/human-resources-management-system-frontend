import React, { useState, useEffect } from "react";
import JobTitleService from "../services/jobTitle";
export default function Job() {


    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        let jobTitleService = new JobTitleService();

        jobTitleService.getJobs().then((result)=>setJobs(result.data.data))
    }, [])
    return (
        <div>
            {console.log(jobs)}
        </div>
    )
}
