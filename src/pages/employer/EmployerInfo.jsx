import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import EmployerService from "../../services/employerService";
import JobAdvertisementService from "../../services/jobAdvertisement";
import { Grid, Icon } from "semantic-ui-react";
import { Card, Spin, Space, Avatar, Col, Row, Button, Image, Tabs } from "antd";
import { StickyContainer, Sticky } from 'react-sticky';
import EmployerModal from "../../components/Modal/EmployerModal";

const { Meta } = Card;
const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
    )}
  </Sticky>
);

const EmployerInfo = () => {

  const [loading, setLoading] = useState(false)
  const [employer, setEmployer] = useState({});

  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  let { employerId } = useParams();

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getEmployer(employerId).then((result) => {
      setEmployer(result.data.data);
    });

    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .findByIsActiveTrueAndEmployer_Id(employerId)
      .then((result) => {
        setJobAdvertisements(result.data.data);
        setLoading(true);
      });
  }, [employerId]);

  const ContactInfo = () => {
    return (
      <div >
        <h4 style={{ display: "inline-block" }}><Icon name="mail outline" size='big'></Icon >{employer.email}</h4>
        <h4 style={{ display: "inline-block" }}><Icon name="phone volume" size='big'></Icon>{employer.phoneNumber}</h4>
        <h4>{employer.activated}</h4>
      </div >
    );
  }
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {console.log(employer)}
      {console.log(jobAdvertisements)}
      <div style={{ float: "right" }}>
        <Button type="primary" onClick={() => { setVisible(true); }}        >
          Edit Employer Info
        </Button>
        {visible && < EmployerModal employerId={employerId} employer={employer} setVisible={setVisible} visible={visible} />}
      </div>
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
                          <Link to={`/jobadvertisements/details/${jobAdvertisement.id}`} >
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
export default EmployerInfo;