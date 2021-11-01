import { useParams } from 'react-router-dom';
import CandidateInfo from '../../candidate/CandidateInfo';
import EducationInformation from '../cvEducationInformation/EducationInformation';
import JobExperienceList from '../cvJobExperience/JobExperienceList';
import SkillList from '../cvSkill/SkillList';
import ForeignLanguageList from '../cvForeignLanguage/ForeignLanguageList';
import LinkList from '../cvLink/LinkList';
import CoverLetterList from '../cvCoverLetter/CoverLetterList';
import ImageList from '../cvImage/ImageList';
import { Row, Col, Divider, Layout, Button } from 'antd';
const { Header, Content } = Layout;

const CvDetails = () => {
    return (
        <div style={{ marginLeft: 250, marginRight: 250 }}>
            <div>
                <Divider orientation="left">Candidate Informations</Divider>
                <Layout >
                    <Header style={{ backgroundColor: '#264653', textAlign: 'right' }}>
                        <Button style={{ textAlign: 'right', margin: "1%" }}>Edit</Button>
                        <Button style={{ textAlign: 'right' }}>Delete</Button>
                    </Header>
                    <Content>
                        <Row justify="center" style={{ backgroundColor: "#E9C46A", padding: "5%" }}>
                            <Col span={5}><ImageList /></Col>
                            <Col span={14}><CandidateInfo /></Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
            <CoverLetterList />
            <Divider orientation="left">Education Informations</Divider>
            <Layout >
                <Header style={{ backgroundColor: '#264653', textAlign: 'right' }}>
                    <Button style={{ textAlign: 'right', margin: "1%" }}>Edit</Button>
                    <Button style={{ textAlign: 'right' }}>Delete</Button>
                </Header>
                <Content>
                    <Row justify="center" style={{ backgroundColor: "#E9C46A", padding: "1%" }}>
                        <Col span={24}>
                            <EducationInformation />
                        </Col>
                    </Row>
                </Content>
            </Layout>

            <JobExperienceList />
            <SkillList />
            <ForeignLanguageList />
            <LinkList />
        </div>
    )
}
export default CvDetails;