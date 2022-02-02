import { Route } from "react-router";
import Candidate from "../../pages/candidate/Candidate";
import CandidateInfo from "../../pages/candidate/CandidateInfo";
import CvDetails from "../../pages/cv/cvMainPage/CvDetails";
import Cvs from "../../pages/cv/cvMainPage/Cvs";
import EmployerInfo from "../../pages/employer/EmployerInfo";
import EmployerList from "../../pages/EmployerList";
import JobAdvertisement from "../../pages/JobAdvertisement";
import JobAdvertisementAdd from "../../pages/jobAdvertisement/JobAdvertisementAdd";
import JobAdvertisementDetails from "../../pages/jobAdvertisement/JobAdvertisementDetails";
import LoginForm from "../../pages/login/Login";
import Main from "../../pages/main/Main";
import Register from "../../pages/register/Register";

const RouterMainComponent = () => {

    return (
        <div>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/register" component={Register} />

                <Route exact path="/jobadvertisement" component={JobAdvertisement} />
                <Route exact path="/jobadvertisement/add" component={JobAdvertisementAdd} />
                <Route exact path="/jobadvertisements/details/:id" component={JobAdvertisementDetails} />
                <Route exact path="/employer/jobadvertisements" component={JobAdvertisementDetails} />

                <Route exact path="/employer/:employerId" component={EmployerInfo} />
                <Route exact path="/employer" component={EmployerList} />

                <Route exact path="/cvs/:candidateId/cv/:cvId" component={CvDetails} />
                
                <Route exact path="/profile/:id" component={Candidate} />
                <Route exact path="/candidateDetails/:id" component={CandidateInfo} />

                
            </div>
        </div>
    )
}

export default RouterMainComponent;