
import { useEffect, useState } from 'react'
import CandidateService from '../../services/candidateService';
import { useParams } from 'react-router-dom';
import { Row, Col, Image, Button, Card, Space, Spin, Tabs } from 'antd';
import CandidateEditModal from '../../components/Modal/CandidateEditModal/CandidateEditModal';

const CandidateEdit = () => {

    const [candidate, setCandidate] = useState();
    let { id } = useParams();
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    let candidateService = new CandidateService();

    useEffect(() => {
        candidateService.getCandidateById(id).then((result) => setCandidate(result.data.data))
        setLoading(true);
    }, [])

    const style = { padding: '8px 0' };
    return (
        <div>
            {loading ?
                <>
                    <div style={{ float: "right" }}>
                        <Button type="primary" onClick={() => { setVisible(true); }}        >
                            Edit Candidate Information
                        </Button>
                        {visible && < CandidateEditModal candidateId={id} candidate={candidate} setVisible={setVisible} visible={visible} />}
                    </div>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={12}>
                            <div style={style} >
                                <Image.PreviewGroup>
                                    <Image
                                        style={{
                                            verticalAlign: "middle",
                                            width: "250px",
                                            height: "250px",
                                            borderRadius: "50%",
                                        }}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                        alt=""
                                    ></Image>
                                </Image.PreviewGroup>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={12}>

                            <Card title={candidate?.firstName + " " + candidate?.lastName}>
                                <div style={{ display: "flex", alignItems: "center", height: "44px", lineHeight: "20px" }}>
                                    <div style={{display:"left", fontWeight: "bold", width: "50%" }}>Email </div>
                                    <div style={{ fontWeight: "400", width: "50%" }}>{candidate?.email}</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", height: "44px", lineHeight: "20px" }}>
                                    <div style={{  fontWeight: "bold", width: "50%" }}>Identity Number </div>
                                    <div style={{  fontWeight: "400", width: "50%" }}>{candidate?.identityNumber}</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", height: "44px", lineHeight: "20px" }}>
                                    <div style={{  fontWeight: "bold", width: "50%" }}>Gender </div>
                                    <div style={{ fontWeight: "400", width: "50%" }}> {candidate?.gender}</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", height: "44px", lineHeight: "20px" }}>
                                    <div style={{  fontWeight: "bold", width: "50%" }}>Birth Date </div>
                                    <div style={{ fontWeight: "400", width: "50%" }}>{candidate?.birthDate}</div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </>
                :
                <Space size="middle">
                    <Spin size="large" />
                </Space>}
        </div >

    )
}

export default CandidateEdit;