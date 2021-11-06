import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobAdvertisementService from "../../services/jobAdvertisement";
import { Layout, Card, Table, Tag, Space, Button, Descriptions } from 'antd';
import { Statistic, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, CheckCircleTwoTone, StopOutlined, SearchOutlined, CheckOutlined, ClockCircleOutlined } from '@ant-design/icons';
import "../../css/jobAdvertisement/jobAdvertisementDetails.css"
import Moment from 'moment';

const { Column } = Table;
const { Header, Sider, Content } = Layout;
const { Meta } = Card;

export default function JobAdvertisementDetails() {
  //parametreleri obje olarak verir
  let { id } = useParams();
  const [advertisementDetail, setAdvertisementDetail] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementById(id)
      .then((result) => setAdvertisementDetail(result.data.data));
  }, []);



  return (
    <div>
      <Layout>
        <Header style={{ background: "#EDEEF2" }}>
          {advertisementDetail.active === "true" ? <Button style={{ right: "-775px" }} type="primary" danger>
            Apply
          </Button> : <Button disabled style={{ right: "-775px" }} type="primary" danger>
            Apply
          </Button>}

          {advertisementDetail.active === "true" ? <CheckCircleTwoTone style={{ fontSize: '36px', marginRight: 100 }} twoToneColor="#52c41a" />
            : <StopOutlined style={{ fontSize: '36px', color: "red", marginRight: 100 }} />}
        </Header>

        <Layout>

          <Content style={{ width: 300 }}>
            <h1>GENERAL QUALIFICATIONS AND JOB DESCRIPTION</h1>
            <hr />
            <Table style={{ margin: 15 }} pagination={{ defaultPageSize: 10, hideOnSinglePage: true }} dataSource={[advertisementDetail]}>
              <Column title="Job Position" dataIndex="jobPosition" key="jobPosition" />
              <Column title="Open Position Count" dataIndex="openPositionCount" key="openPositionCount" />
              <Column title="City" dataIndex="cityName" key="cityName" />
              <Column title="Work Type" dataIndex="workTypeName" key="workTypeName" />
              <Column title="Work Time Type" dataIndex="workTimeTypeName" key="workTimeTypeName" />
            </Table>
            <div className="site-card-wrapper" style={{ textAlign: "center" }}>
              <Row gutter={16} >
                <Col span={11} style={{ margin: 15 }}>
                  <Card title="Salary">
                    Minimum Salary : {advertisementDetail.minSalary} <br />
                    Maximum Salary : {advertisementDetail.maxSalary}
                  </Card>
                </Col>
                <Col span={11} style={{ margin: 15 }}>
                  <Card title="Date Info" bordered={false}>
                    Publish Date : {Moment(advertisementDetail.publishDate).format("yyyy/MM/dd")} <br />
                    Last Apply Date : {Moment(advertisementDetail.lastApplyDate).format("yyyy/MM/dd")}
                  </Card>
                </Col>
                <Col span={24} style={{ marginLeft: 4, marginRight: 20 }}>
                  <Card title="Job Description" bordered={false}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem facere voluptatum illum itaquisquam moles Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, tenetur odio culpa facere vero sapiente eos quis, incidunt non officia impedit ab. Fuga, magnam obcaecati reprehenderit et, id repellat soluta consequatur nihil hic officiis aut distinctio laudantium voluptate facere laborum nisi similique sit officia eveniet quam explicabo optio iure deleniti debitis. Ducimus, vel ullam? Similique nulla modi recusandae neque rem alias quos minus cupiditate voluptate doloremque vel, tenetur veniam ipsa quaerat minima fugit suscipit consectetur autem provident amet? Saepe voluptatem provident fugit magni? Vitae omnis ratione eius magnam eaque adipisci. Velit, unde similique veniam quod quae iste ab id ad? Maxime corrupti reprehenderit, minus a cumque quis dignissimos. Temporibus cumque esse fugit ea accusamus dolores ipsam, eum magnam nemo explicabo quis fugiat placeat suscipit odio libero mollitia reprehenderit. Perferendis, non aliquid eius, deserunt quaerat dolorem soluta ad recusandae, magni ipsa delectus. Hic, ipsa ipsam dolor quae optio maiores eius quos earum magnam sint quibusdam, praesentium, eligendi assumenda alias explicabo dicta at facere provident? Debitis neque rerum vel, odit perferendis aliquam magnam doloremque suscipit earum vero incidunt exercitationem voluptas esse quisquam, nobis error distinctio libero fugiat sapiente possimus. Eligendi doloribus molestiae voluptatem modi nesciunt vero laboriosam quibusdam. Quo repellendus inventore voluptas a aut? Quibusdam dolore atque vitae molestiae reiciendis deserunt ipsa voluptatum labore temporibus facere similique, quidem illum ut! Impedit, eaque iure praesentium commodi omnis placeat dignissimos velit at maxime quod hic dicta asperiores eveniet odio rerum veritatis possimus adipisci sequi doloremque esse maiores aut? Optio voluptate iusto cumque expedita quidem vero aperiam aliquam assumenda distinctio ab, velit iure tempore ipsam dicta. Temporibus repellendus ad quae cupiditate sequi provident recusandae exercitationem et minima eligendi? Numquam eaque voluptates atque nisi. Magni vitae harum nostrum ratione autem impedit quis nobis exercitationem dolorem cumque expedita ab, maxime aliquid aperiam, fugiat reiciendis cum sit magnam provident quod error delectus voluptate neque sunt. Rem sint maxime vel alias similique, exercitationem quibusdam, facilis nam nemo at enim? Voluptate eius, necessitatibus eaque repellat similique vel aspernatur magni quibusdam, consectetur fugiat nisi vitae, velit sunt quidem nam alias. Numquam labore dolores repudiandae pariatur sunt accusantium nam aliquam, quaerat aspernatur? Illo neque culpa accusamus, recusandae sequi porro fugit quia incidunt quibusdam earum sint laudantium suscipit ratione optio nihil est ea provident asperiores iste, cum, repellendus a aspernatur perferendis! At, ratione? Voluptatum vitae repudiandae aut officia, minima dicta eum quos, incidunt fuga ex aliquid! Repellat quas accusamus sint voluptate minus, optio suscipit voluptatem laudantium ex vel asperiores quasi doloribus ipsa quis dignissimos esse dolor perspiciatis quae nobis nisi culpa fuga distinctio! Omnis laborum adipisci ipsam nulla, eveniet laudantium voluptatem harum nobis vel blanditiis officia, maiores nesciunt? Mollitia ex magnam hic molestiae culpa quis assumenda incidunt magni voluptas natus aspernatur, doloremque dolores ipsa tenetur, alias, eaque soluta? Quae saepe error iste nobis facere mollitia, molestias dolorum sint natus optio, beatae soluta, temporibus harum inventore pariatur aut deserunt sit numquam amet quam! Eligendi mollitia totam nostrum, nisi minus officia deserunt voluptatum voluptate fuga nihil recusandae, repellat vel? Adipisci officiis fuga vel eveniet dolore.
                  </Card>
                </Col>
              </Row>
            </div>,
            <hr />
            <Row gutter={16}>
              <Col span={7}>
                <Statistic title="Day" value={5 + " day"} prefix={<ClockCircleOutlined />} />
              </Col>
              <Col span={10}>
                <Statistic title="Viewing" value={1128} prefix={<SearchOutlined />} />
              </Col>
              <Col span={7}>
                <Statistic title="Application" value={93} prefix={<CheckOutlined />} />
              </Col>
            </Row>,
          </Content>
          <Sider style={{ margin: 15 }} >
            <Card
              hoverable
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta title={advertisementDetail.companyName} description={advertisementDetail.webAddress} />
            </Card>,
          </Sider>
        </Layout>
      </Layout>
    </div>
  )
}
