import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import SkillService from "../../../services/skillService";
import { Row, Col, Divider, Layout, Button, Spin, Space } from 'antd';

const { Header, Content } = Layout;

const SkillList = () => {

    const [skills, setSkills] = useState([])
    const skillService = new SkillService();
    let { cvId } = useParams();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        skillService.getSkillsByCvId(cvId).then(result => {
            setSkills(result.data.data);
            setLoading(true);
        })
    }, [])

    return (
        <div>
            <Divider orientation="left">Skills Informations</Divider>
            {loading ?
                <div>
                    <Layout style={{ marginTop: 12 }} >
                        <Header style={{ backgroundColor: '#264653', textAlign: 'right' }}>
                            <Button style={{ textAlign: 'right', margin: "1%" }}>Edit</Button>
                            <Button style={{ textAlign: 'right' }}>Delete</Button>
                        </Header>
                        <Content>
                            {skills.map((jobExperience) => (
                                <Row justify="center" style={{ backgroundColor: "#E9C46A", padding: "1%" }}>
                                    <Col span={24}>
                                        <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                            <Col className="gutter-row" span={12}>
                                                <span style={{ textAlign: "right", marginTop: "1%", fontWeight: "bold" }}>Skill Name :</span>
                                            </Col>
                                            <Col className="gutter-row" span={6}>
                                                <p style={{ textAlign: "left", marginTop: "1%" }}>{jobExperience.skillName}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            ))
                            }
                        </Content>
                    </Layout>


                </div>
                :  <Space size="middle">
                <Spin size="large" />
              </Space>
            }
        </div>
    )
}
export default SkillList;