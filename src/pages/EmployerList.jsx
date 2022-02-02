import { useState, useEffect } from "react";
import EmployerService from "../services/employerService";
import { Link } from "react-router-dom";
import { Card, Spin, Space, Avatar, Col, Row } from "antd";
const { Meta } = Card;
export default function EmployerList() {
  const [employers, setEmployers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getEmployers().then((result) => {
      setEmployers(result.data.data);
      console.log(result.data.data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading ?
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <p>Companies</p>
          <Row gutter={16}>
            {employers.map((employer) => (
              <Col span={8} key={employer.id} onClick={() => console.log(employer)}>
                <Card style={{ width: 300, marginTop: 16 }} loading={false}  hoverable={true}>
                  <Link to={`/employer/${employer.id}`}>
                    <Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={employer.companyName}
                      description={employer.email}
                    />
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        :
        <Space size="middle">
          <Spin size="large" />
        </Space>
      }
    </>
  )
}
