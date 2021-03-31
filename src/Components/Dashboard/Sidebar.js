import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, Layout, Avatar, Image, Space, Typography } from "antd";
import Dashboard from "./Dashboard";
import OpinionList from "./OpinionList";
import EditorsList from "./EditorsList";
import WritersList from "./WritersList";
import MyOpinion from "./MyOpinion";
import UserManagement from "./UserManagement";
import Setting from "./Setting";

import {
  DesktopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PieChartOutlined,
  ContainerOutlined,
  BellOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ height: "100vh" }}
        >
          <div className={collapsed ? "logo1" : "logo"}>Opinion of Nepal</div>

          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/opinionlist">Opinion List</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/editors">Editors List</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to="/writers">Writers List</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<VideoCameraOutlined />}>
              <Link to="/usermanagement">User Management</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<UploadOutlined />}>
              <Link to="/myopinion">My Opinion</Link>
            </Menu.Item>

            <Menu.Item key="7" icon={<ContainerOutlined />}>
              <Link to="/setting"> Setting</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggleCollapsed,
              }
            )}

            <Title
              level={5}
              style={{
                position: "absolute",
                top: "18px",
                left: "290px",
                fontWeight: "bold",
                fontSize: "24px",
                lineHeight: "30px",
                letterSpacing: " 0.3px",

                color: " #252733",
              }}
            >
              Dynamic Title(changes on click)
            </Title>

            <div style={{ float: "right" }}>
              <Space>
                <div style={{ marginRight: "10rem" }}>
                  <SearchOutlined
                    size={30}
                    style={{
                      color: " #C5C7CD",
                      boxSizing: "border-box",
                      fontSize: "18px",
                      marginRight: "8px",
                    }}
                  />
                  <BellOutlined
                    size={30}
                    style={{
                      color: " #C5C7CD",
                      boxSizing: "border-box",
                      fontSize: "18px",
                    }}
                  />
                </div>{" "}
                <Title
                  level={5}
                  style={{
                    marginLeft: "1rem",
                    position: "absolute",
                    right: "71px",
                    top: "21px",
                    color: "##25273",
                    letterSpacing: "0.2px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Suman Bhattarai
                </Title>
                <Avatar
                  size={40}
                  style={{ marginRight: "1em" }}
                  src={
                    <Image src="https://images.unsplash.com/photo-1567168409016-c73ab82ef45b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=342&q=80" />
                  }
                />
              </Space>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route exact path="/" component={Dashboard} />
            <Route path="/opinionlist" component={OpinionList} />
            <Route exact path="/editors" component={EditorsList} />
            <Route path="/writers" component={WritersList} />
            <Route exact path="/myopinion" component={MyOpinion} />
            <Route path="/usermanagement" component={UserManagement} />
            <Route path="/setting" component={Setting} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            {" "}
            Copyright 2021 Opinion of Nepal | Powered by @illionSo
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default Sidebar;
