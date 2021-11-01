import { useEffect, useState } from 'react'
import CoverLetterService from '../../../services/coverLetterService';
import { useParams } from 'react-router-dom';
import { Row, Col, Divider, Layout, Button, Spin, Space } from 'antd';

const { Header, Content } = Layout;

const CoverLetterList = () => {
    const [loading, setLoading] = useState(false);
    const [coverLetters, setCoverLetters] = useState([])

    let coverLetterService = new CoverLetterService();
    let { cvId } = useParams();

    useEffect(() => {
        coverLetterService.getCoverLetterByCvId(cvId).then(result => setCoverLetters(result.data.data))
        setLoading(true);
    }, [])
    return (
        <div>
            <Divider orientation="left">Cover Letters Informations</Divider>
            <div>
                {loading ?
                     <Layout style={{ marginTop: 12 }} >
                     <Header style={{ backgroundColor: '#264653', textAlign: 'right' }}>
                         <Button style={{ textAlign: 'right', margin: "1%" }}>Edit</Button>
                         <Button style={{ textAlign: 'right' }}>Delete</Button>
                     </Header>
                     <Content>
                         {coverLetters.map((coverLetter) => (
                             <Row key={coverLetter.id} justify="center" style={{ backgroundColor: "#E9C46A", padding: "1%" }}>
                                 <Col span={24}>
                                     <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                         <Col className="gutter-row" span={12}>
                                             <p style={{ textAlign: "left", marginTop: "1%" }}>{coverLetter.covverLetter}</p>
                                         </Col>
                                     </Row>
                                 </Col>
                             </Row>
                         ))
                         }
                     </Content>
                 </Layout>
                    : (
                        <Space size="middle">
                            <Spin size="large" />
                        </Space>
                    )}
            </div>
        </div>
    )
}
export default CoverLetterList;