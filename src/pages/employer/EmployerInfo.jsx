import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployerService from "../../services/employerService";
import JobAdvertisementService from "../../services/jobAdvertisement";
import { Table, Grid, Menu, Icon, Segment } from "semantic-ui-react";
import { Image } from 'antd';
import { Link } from "react-router-dom";
import { Tabs } from 'antd';
import { Card, Spin, Space, Avatar, Col, Row } from "antd";
import { StickyContainer, Sticky } from 'react-sticky';

const { Meta } = Card;
const { TabPane } = Tabs;
const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
    )}
  </Sticky>
);
export default function EmployerInfo() {
const [loading, setLoading] = useState(false)
  const [employer, setEmployer] = useState([]);
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  let { employerId } = useParams();

  const [activeItem, setActiveItem] = useState("adress");

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getEmployer(employerId).then((result) => {
      setEmployer(result.data.data);
      console.log(employer);
    });

    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .findByIsActiveTrueAndEmployer_Id(employerId)
      .then((result) => {
        setJobAdvertisements(result.data.data);
        console.log(jobAdvertisements);
      });
      setLoading(true);
  }, []);

  let JobAdvertisementInfo = () => {
    return (
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Description</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
            <Table.HeaderCell>Work Time Type</Table.HeaderCell>
            <Table.HeaderCell>Work Type</Table.HeaderCell>
            <Table.HeaderCell>Minimum Salary</Table.HeaderCell>
            <Table.HeaderCell>Maximum Salary</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
            <Table.HeaderCell>Publish Date</Table.HeaderCell>
            <Table.HeaderCell>Last Apply Date</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvert) => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvert.jobPosition.jobTitle}</Table.Cell>
              <Table.Cell>{jobAdvert.workTimeType.workTimeTypeName}</Table.Cell>
              <Table.Cell>{jobAdvert.workType.workTypeName}</Table.Cell>
              <Table.Cell>{jobAdvert.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvert.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdvert.publishDate}</Table.Cell>
              <Table.Cell>{jobAdvert.lastApplyDate}</Table.Cell>
              <Table.Cell><Link to={`/jobadvertisements/${jobAdvert.id}`}>Review</Link></Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }

  function ContactInfo() {
    return (
      <div >
        <h4 style={{ display: "inline-block" }}><Icon name="mail outline" size='big'></Icon >{employer.email}</h4>
        <h4 style={{ display: "inline-block" }}><Icon name="phone volume" size='big'></Icon>{employer.phoneNumber}</h4>
        <h4>{employer.activated}</h4>
      </div >
    );
  }
  return (
    <div>
      {console.log(employer)}
      {console.log(jobAdvertisements)}

      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width={3}>
            <Image.PreviewGroup>
              <Image width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            </Image.PreviewGroup>
          </Grid.Column>
          <Grid.Column width={13}>
            <h1 className="companyName">{employer.companyName}</h1>
            <h4>{employer.introduction}</h4>
            <h3>{employer.webAddress}</h3>
            <hr />
            <ContactInfo></ContactInfo>
            <hr />
          </Grid.Column>
        </Grid.Row>
        <StickyContainer>
          <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
            <TabPane tab="Job Advertisement" key="1" style={{ height: 1000 }}>
              {loading ?
                <div style={{ background: "#ECECEC", padding: "30px" }}>
                  <Row gutter={16}>
                    {jobAdvertisements.map((jobAdvertisement) => (
                      <Col span={8} key={jobAdvertisement.id} onClick={() => console.log(jobAdvertisement)}>
                        <Card style={{ width: 300, marginTop: 16 }} loading={false} hoverable={true}>
                          <Link to={`/jobAdvertisement/${jobAdvertisement.id}`}>
                            <Meta
                              avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                              }
                              title={jobAdvertisement.jobPosition.jobTitle}
                              description={jobAdvertisement.jobDescription}
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
                </Space>}
            </TabPane>
          </Tabs>
        </StickyContainer>

      </Grid>
    </div>
  );
}
