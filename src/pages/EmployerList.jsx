import React, { useState, useEffect } from "react";
import EmployerService from "../services/employerService";
import { Card, Icon, Avatar, Col, Row } from "antd";
const { Meta } = Card;
export default function EmployerList() {
  const [employers, setEmployers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getEmployers().then((result) => {
      setEmployers(result.data.data);
      console.log(result.data.data);
    });
  }, []);

  return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
          {employers.map((employer) => (
            <Col span={8} key={employer.id}>
              <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={employer.companyName}
                  description={employer.email}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
  )
}
