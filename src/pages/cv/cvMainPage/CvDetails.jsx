import CandidateInfo from '../../candidate/CandidateInfo';
import EducationInformation from '../cvEducationInformation/EducationInformation';
import JobExperienceList from '../cvJobExperience/JobExperienceList';
import SkillList from '../cvSkill/SkillList';
import ForeignLanguageList from '../cvForeignLanguage/ForeignLanguageList';
import LinkList from '../cvLink/LinkList';
import CoverLetterList from '../cvCoverLetter/CoverLetterList';

const CvDetails = () => {
    return (
        <div style={{ marginLeft: 250, marginRight: 250 }}>
            <CandidateInfo />
            <CoverLetterList />
            <EducationInformation />
            <JobExperienceList />
            <SkillList />
            <ForeignLanguageList />
            <LinkList />
        </div>
    )
}
export default CvDetails;