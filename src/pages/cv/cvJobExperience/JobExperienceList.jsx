import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col, Divider, Layout, Button } from 'antd';
import JobExperienceService from '../../../services/jobExperienceService';

const { Header, Content } = Layout;

const JobExperienceList = () => {
    let { candidateId } = useParams()
    const [jobExperience, setJobExperience] = useState([])
    const [loading, setLoading] = useState(false);


    const loadJobExperience = async () => {
        let jobExperienceService = new JobExperienceService();
        try {
            await jobExperienceService.getJobExperience(candidateId).then((result) => setJobExperience(result.data.data));
            setLoading(true);
        } catch (error) {
            setLoading(false);
        }
    };
    useEffect(() => {
        loadJobExperience();

    }, [])
    return (
        <div>
            {console.log(jobExperience)}
            <Divider orientation="left">Job Experience Informations</Divider>
            {loading ?
                <div>
                    {
                        jobExperience.map((jobExperience) => (
                            <div key={jobExperience.id}>
                                <Layout style={{ marginTop: 12 }} >
                                    <Header style={{ backgroundColor: '#264653', textAlign: 'right' }}>
                                        <Button style={{ textAlign: 'right', margin: "1%" }}>Edit</Button>
                                        <Button style={{ textAlign: 'right' }}>Delete</Button>
                                    </Header>
                                    <Content>
                                        <Row justify="center" style={{ backgroundColor: "#E9C46A", padding: "1%" }}>
                                            <Col span={24}>

                                                <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                                    <Col className="gutter-row" span={12}>
                                                        <span style={{ textAlign: "right", marginTop: "1%", fontWeight: "bold" }}>Work Place Name :</span>
                                                    </Col>
                                                    <Col className="gutter-row" span={6}>
                                                        <p style={{ textAlign: "left", marginTop: "1%" }}>{jobExperience.workPlaceName}</p>
                                                    </Col>
                                                </Row>
                                                <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                                    <Col className="gutter-row" span={12}>
                                                        <span style={{ textAlign: "left", marginTop: "1%", fontWeight: "bold" }}>Position :</span>
                                                    </Col>
                                                    <Col className="gutter-row" span={6}>
                                                        <p style={{ textAlign: "left", marginTop: "1%" }}>{jobExperience.jobPosition}</p>
                                                    </Col>
                                                </Row>
                                                <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                                    <Col className="gutter-row" span={12}>
                                                        <span style={{ textAlign: "left", marginTop: "1%", fontWeight: "bold" }}>Start Date: </span>
                                                    </Col>
                                                    <Col className="gutter-row" span={6}>
                                                        <p style={{ textAlign: "left", marginTop: "1%" }}>{jobExperience.startDate}</p>
                                                    </Col>
                                                </Row>
                                                <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                                    <Col className="gutter-row" span={12}>
                                                        <span style={{ textAlign: "left", marginTop: "1%", fontWeight: "bold" }}>Quit Date: </span>
                                                    </Col>
                                                    <Col className="gutter-row" span={6}>
                                                        <p style={{ textAlign: "left", marginTop: "1%" }}>{jobExperience.quitDate}</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Content>
                                </Layout>
                            </div>
                        ))
                    }
                </div>
                : null
            }
        </div>
    )
}

export default JobExperienceList;