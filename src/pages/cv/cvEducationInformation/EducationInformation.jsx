import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col, Spin, Space } from "antd";
import EducationInformationService from "../../../services/educationInformationService";
import moment from 'moment'

const EducationInformation = () => {
    const [educationInfo, setEducationInfo] = useState([]);
    let { candidateId } = useParams();
    const [loading, setLoading] = useState(false);
    const educationInformationService = new EducationInformationService();
    useEffect(() => {
        loadEducationInformation();
    }, []);

    const loadEducationInformation = async () => {
        try {
            await educationInformationService
                .getEducationInformationById(candidateId)
                .then((result) => setEducationInfo(result.data.data));
            setLoading(true);
            console.log(educationInfo);
        } catch (error) {
            setLoading(false);
        }
    };
    return (
        <div>
            {loading ?
                <div>
                    {educationInfo.map((educationInfo) => (
                        <div>
                            <Row justify="center" gutter={16}>
                                <Col className="gutter-row" span={12}>
                                    <span
                                        style={{
                                            textAlign: "right",
                                            marginTop: "1%",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        University :
                                    </span>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <p style={{ textAlign: "left", marginTop: "1%" }}>
                                        {educationInfo.university}
                                    </p>
                                </Col>
                            </Row>

                            <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                <Col className="gutter-row" span={12}>
                                    <span
                                        style={{
                                            textAlign: "right",
                                            marginTop: "1%",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Department :
                                    </span>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <p style={{ textAlign: "left", marginTop: "1%" }}>
                                        {educationInfo.universityDepartment}
                                    </p>
                                </Col>
                            </Row>

                            <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                <Col className="gutter-row" span={12}>
                                    <span
                                        style={{
                                            textAlign: "left",
                                            marginTop: "1%",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Start Date :
                                    </span>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <p style={{ textAlign: "left", marginTop: "1%" }}>
                                        {moment(educationInfo.startDate).format("DD.MM.yyyy")}
                                    </p>
                                </Col>
                            </Row>
                            <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                <Col className="gutter-row" span={12}>
                                    <span
                                        style={{
                                            textAlign: "left",
                                            marginTop: "1%",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Graduate Date:
                                    </span>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <p style={{ textAlign: "left", marginTop: "1%" }}>
                                        {moment(educationInfo.graduateDate).format("DD.MM.yyyy")}
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    ))
                    }
                </div>

                : (
                    <Space size="middle">
                        <Spin size="large" />
                    </Space>
                )}
        </div>
    );
};
export default EducationInformation;
