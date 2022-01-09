import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LinkService from '../../../services/linkService';
import { Row, Col, Divider, Layout, Button } from 'antd';
const { Header, Content } = Layout;


const LinkList = () => {

    const [links, setLinks] = useState([])
    const [loading, setLoading] = useState(false);
    let { cvId } = useParams();
    let linkService = new LinkService();
    useEffect(() => {
        linkService.getLinksByCvId(cvId).then(result => {
            setLinks(result.data.data);
            setLoading(true);
        })
    }, [])
    return (
        <div>   
            <div>
                <Divider orientation="left">Links Informations</Divider>
                {loading ?
                    <div>
                        <Layout style={{ marginTop: 12 }} >
                            <Header style={{ backgroundColor: '#264653', textAlign: 'right' }}>
                                <Button style={{ textAlign: 'right', margin: "1%" }}>Edit</Button>
                                <Button style={{ textAlign: 'right' }}>Delete</Button>
                            </Header>
                            <Content>
                                {links.map((link) => (
                                    <Row key={link.id} justify="center" style={{ backgroundColor: "#E9C46A", padding: "1%" }}>
                                        <Col span={24}>
                                            <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                                <Col className="gutter-row" span={12}>
                                                    <span style={{ textAlign: "right", marginTop: "1%", fontWeight: "bold" }}>{link.linkName}</span>
                                                </Col>
                                                <Col className="gutter-row" span={12}>
                                                    <p style={{ textAlign: "left", marginTop: "1%" }}><a href={link.url} target="_blank" rel="noreferrer">{link.url}</a></p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                ))
                                }
                            </Content>
                        </Layout>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}
export default LinkList;