import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, Layout } from "antd";
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
} from "@ant-design/icons";
const { Header, Sider, Content, Footer } = Layout;

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
