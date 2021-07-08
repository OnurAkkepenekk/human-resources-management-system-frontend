import React, { useState, useEffect } from "react";
import EmployeeService from "../services/employeeService";

export default function Employee() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        let employeeService = new EmployeeService();
        employeeService.getEmployees().then((result)=>setEmployees(result.data.data))
    }, [])

    return (
        <div>
            {console.log(employees)}
        </div>
    )

}
