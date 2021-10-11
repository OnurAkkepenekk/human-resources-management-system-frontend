import { Switch } from 'antd';
import { useState } from 'react';
import CandidateRegister from '../candidate/CandidateRegister';
import EmployerRegister from './EmployerRegister';
const Register = () => {
    const [checked, setChecked] = useState(true);

    function onChange(checkedForm) {
        setChecked(checkedForm);
    }
    return (
        <div>
            <Switch checkedChildren="Candidate" unCheckedChildren="Employer" defaultChecked onChange={onChange} />
            <div>
            {checked !== true ? <EmployerRegister /> : <CandidateRegister />}
            </div>
        </div>
    )
}

export default Register;
