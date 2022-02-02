import { useEffect, useState } from 'react'
import CandidateService from '../../services/candidateService';
import { useParams } from 'react-router-dom';
import { Row, Col, Spin, Space, Divider, Layout, Button } from 'antd';
import ImageList from '../cv/cvImage/ImageList';
const { Header, Content } = Layout;

const CandidateInfo = () => {

    const [candidate, setCandidate] = useState();

    let { candidateId } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadCandidateInfo();
        console.log(loading);
    }, [])


    const loadCandidateInfo = async () => {
        let candidateService = new CandidateService();
        try {
            await candidateService.getCandidateById(candidateId).then((result) => setCandidate(result.data.data))
            console.log(candidate)
            setLoading(true);
        } catch (error) {
            setLoading(false);
        }
    };


    return (


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
                        <Col span={14}>
                            <div style={{ paddingTop: 10 }}>
                                {console.log(candidate)}
                                {
                                    loading ?
                                        <div>
                                            <Row justify="center" gutter={16}>
                                                <Col className="gutter-row" span={12}><span style={{ textAlign: "right", marginTop: "1%", fontWeight: "bold" }}>First Name :</span></Col>
                                                <Col className="gutter-row" span={6}>
                                                    <p style={{ textAlign: "left", marginTop: "1%" }}>{candidate.firstName}</p>
                                                </Col>
                                            </Row>
                                            <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                                <Col className="gutter-row" span={12}>
                                                    <span style={{ textAlign: "right", marginTop: "1%", fontWeight: "bold" }}>Last Name :</span>
                                                </Col>
                                                <Col className="gutter-row" span={6}>
                                                    <p style={{ textAlign: "left", marginTop: "1%" }}>{candidate.lastName}</p>
                                                </Col>
                                            </Row>
                                            <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                                <Col className="gutter-row" span={12}>
                                                    <span style={{ textAlign: "left", marginTop: "1%", fontWeight: "bold" }}>Email :</span>
                                                </Col>
                                                <Col className="gutter-row" span={6}>
                                                    <p style={{ textAlign: "left", marginTop: "1%" }}>{candidate.email}</p>
                                                </Col>
                                            </Row>
                                            <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                                <Col className="gutter-row" span={12}>
                                                    <span style={{ textAlign: "left", marginTop: "1%", fontWeight: "bold" }}>Gender: </span>
                                                </Col>
                                                <Col className="gutter-row" span={6}>
                                                    <p style={{ textAlign: "left", marginTop: "1%" }}>{candidate.gender}</p>
                                                </Col>
                                            </Row>
                                            <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                                <Col className="gutter-row" span={12}>
                                                    <span style={{ textAlign: "left", marginTop: "1%", fontWeight: "bold" }}>Birth Date :</span>
                                                </Col>
                                                <Col className="gutter-row" span={6}>
                                                    <p style={{ textAlign: "left", marginTop: "1%" }}>{candidate.birthDate}</p>
                                                </Col>
                                            </Row>
                                        </div>
                                        :
                                        <Space size="middle">
                                            <Spin size="large" />
                                        </Space>
                                }
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </div>


    )
}

export default CandidateInfo;