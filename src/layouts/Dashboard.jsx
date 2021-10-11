import React, { useState } from "react";
import JobAdvertisement from "../pages/JobAdvertisement";
import { Route } from "react-router";
import JobAdvertisementAdd from "../pages/jobAdvertisement/JobAdvertisementAdd";
import JobAdvertisementDetails from "../pages/jobAdvertisement/JobAdvertisementDetails";
import EmployerInfo from "../pages/employer/EmployerInfo";
import { Layout as AntLayout, Menu } from 'antd';
import Main from '../pages/main/Main'
import { Link, useParams } from "react-router-dom";
import "../css/Dashboard/dashboard.css"
import { Image } from 'semantic-ui-react'
import EmployerList from "../pages/EmployerList";
import Register from "../pages/register/Register";
import LoginForm from "../pages/login/Login";
import {
  LogoutOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';


export default function Dashboard() {
  const { Content, Footer, Sider } = AntLayout;
  const [collapsed, setCollapsed] = useState(false);
  var {name} = useParams();
  console.log(name);

  const openCloseMenu = () => {
    setCollapsed(!collapsed);
  }
  return (

    <AntLayout>
      <Sider style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }} trigger={null} collapsible collapsed={collapsed}>

        <div style={{ height: '64px' }} >
          {collapsed ? <MenuUnfoldOutlined className='sider-button sider-collapsed' onClick={openCloseMenu} /> :
            <MenuFoldOutlined className='sider-button sider-not-collapsed' onClick={openCloseMenu} />
          }
        </div>
        <div className="logo" >
          <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/61885344?v=4"></Image>
        </div>
        {
          collapsed ? null :
            <div className="sider-header">
              <h2>HRMS</h2>
            </div>
        }

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/" className="nav-text">Main page</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/jobadvertisement" className="nav-text"> Job Advertisement</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/employer" className="nav-text">Employer</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout className="site-layout" style={{ marginLeft: 200 }}>
      
        <Content style={{ margin: '24px 16px 0', overflow: 'initial', minHeight: "100vh" }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            <Route
              exact
              path="/"
              component={Main}>
            </Route>
            <Route
              exact
              path="/login"
              component={LoginForm}>
            </Route>
            <Route
              exact
              path="/register"
              component={Register}
            ></Route>
            <Route
              exact
              path="/jobadvertisement"
              component={JobAdvertisement}
            ></Route>
            <Route
              exact
              path="/jobadvertisements/details/:id"
              component={JobAdvertisementDetails}
            ></Route>
            <Route
              exact
              path="/employer/jobadvertisements"
              component={JobAdvertisementDetails}
            ></Route>
            <Route
              exact
              path="/employer/:id"
              component={EmployerInfo}
            ></Route>
            <Route
              exact
              path="/employer"
              component={EmployerList}
            ></Route>
            <Route
              exact
              path="/jobadvertisement/add"
              component={JobAdvertisementAdd}
            ></Route>
          </div>
        </Content>
        <Footer style={{
          position: "relative",
          bottom: 0,
          width: "100%",
          height: "60px",   /* Height of the footer */
        }}>Onur Akkepenek ©2021 Created by Ant UED</Footer>
      </AntLayout>
    </AntLayout>)
}