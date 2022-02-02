import { Button, Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useParams } from 'react-router'
import CVService from "../../../services/cvService";

const Cvs = () => {
    const [cvs, setCvs] = useState([]);
    const cvService = new CVService();
    let { id } = useParams();
    useEffect(() => {
        console.log(id);
        cvService.getCvByCandidateId(id).then((result => { setCvs(result.data.data); }));

    }, [])

    return (
        <div>
            {console.log(cvs)}
            <>
                <h1> My Cvs</h1>
                <div className="site-card-wrapper m-4" >
                    <Row gutter={24}>
                        {cvs.map((cv) => (
                            <Col span={12}>
                                <Card title={`CV ${cv.id}`} bordered={true} hoverable={true} extra={<a href={`/cvs/${id}/cv/${cv.id}`}>More</a>}>
                                    {cv.creationDate}
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </div>
            </>

        </div>
    )
}

export default Cvs;