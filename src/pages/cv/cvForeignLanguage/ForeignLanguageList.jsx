import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ForeignLanguageService from '../../../services/foreignLanguageService'

import { Row, Col, Divider, Layout, Button, Icon } from 'antd';
import {
    StarFilled
} from '@ant-design/icons';
const { Header, Content } = Layout;

const ForeignLanguageList = () => {
    const [foreignLanguages, setForeignLanguages] = useState([])
    const [loading, setLoading] = useState(false);
    let { cvId } = useParams();
    const foreignLanguageService = new ForeignLanguageService();
    useEffect(() => {
        foreignLanguageService.getForeignLanguagesByCvId(cvId).then(result => {
            setForeignLanguages(result.data.data);
            setLoading(true);
        })
    }, [])

    const Stars = (x) => {
        let menuItems = [];
        for (var i = 0; i < x; i++) {
            menuItems.push(<StarFilled />);
        }
        return <div>{menuItems}</div>
    }
    return (
        <div>
            <Divider orientation="left">Foreign Language Informations</Divider>
            {loading ?
                <div>
                    <Layout style={{ marginTop: 12 }} >
                        <Header style={{ backgroundColor: '#264653', textAlign: 'right' }}>
                            <Button style={{ textAlign: 'right', margin: "1%" }}>Edit</Button>
                            <Button style={{ textAlign: 'right' }}>Delete</Button>
                        </Header>
                        <Content>
                            {foreignLanguages.map((foreignLanguage) => (
                                <Row justify="center" style={{ backgroundColor: "#E9C46A", padding: "1%" }}>
                                    <Col span={24}>
                                        <Row justify="center" gutter={16} style={{ marginTop: "2%" }}>
                                            <Col className="gutter-row" span={12}>
                                                <span style={{ textAlign: "right", marginTop: "1%", fontWeight: "bold" }}>Language:</span>
                                            </Col>
                                            <Col className="gutter-row" span={6}>
                                                <p style={{ textAlign: "left", marginTop: "1%" }}>{foreignLanguage.language}</p>
                                            </Col>
                                            <Col className="gutter-row" span={6}>
                                                <p style={{ textAlign: "left", marginTop: "1%" }}>
                                                    {Stars(foreignLanguage.languageLevel)}
                                                </p>
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
    )
}
export default ForeignLanguageList;