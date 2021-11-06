import { useState } from "react";
import { Layout as AntLayout, Menu } from 'antd';
import { Link, useParams } from "react-router-dom";
import "../css/Dashboard/dashboard.css"
import { Image } from 'semantic-ui-react'
import { LogoutOutlined, UserOutlined, UploadOutlined, VideoCameraOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import RouterMainComponent from "../components/RouterMainComponent/RouterMainComponent";

export default function Dashboard() {
  const { Content, Footer, Sider } = AntLayout;
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("1");
  var { name } = useParams();
  console.log(name);

  const openCloseMenu = () => {
    setCollapsed(!collapsed);
  }
  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <AntLayout>
      <Sider style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }} trigger={null} collapsible collapsed={collapsed}>

        <div style={{ height: '64px' }} >
          {collapsed
            ? <MenuUnfoldOutlined className='sider-button2 sider-collapsed' onClick={openCloseMenu} />
            : <MenuFoldOutlined className='sider-button sider-not-collapsed' onClick={openCloseMenu} />
          }
        </div>
        <div className="logo" >
          <Image spaced="right" src="https://avatars.githubusercontent.com/u/61885344?v=4"></Image>
        </div>
        {
          collapsed ? null :
            <div className="sider-header-hrms">
              <h2 className="hrms">HRMS</h2>
            </div>
        }

        <Menu theme="dark" mode="inline" onClick={handleClick} defaultSelectedKeys={['1']} selectedKeys={[current]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/" className="nav-text">Main page</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/jobadvertisement" className="nav-text"> Job Advertisement</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/employer" className="nav-text">Employer</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UploadOutlined />}>
            <Link to="/login" className="nav-text">Login</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
          <Menu.Item key="6" icon={<LogoutOutlined />}>
            <Link to="/profile/26" className="nav-text">Profile</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial', minHeight: "100vh" }}>
          <RouterMainComponent />
        </Content>
        <Footer style={{
          position: "relative",
          bottom: 0,
          width: "100%",
          height: "60px",
        }}>Onur Akkepenek ©2021 Created by Ant UED</Footer>
      </AntLayout>
    </AntLayout>)
}