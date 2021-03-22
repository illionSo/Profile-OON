import React from "react";
import { Layout, Menu } from "antd";

import {
  AppstoreOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";
const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
          className="dashboardTitle"
          style={{ height: "100vh", top: "0" }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
        >
          <MenuItem
            key="0"
            icon={<PieChartOutlined />}
            style={{
              paddingLeft: "0",
              marginBottom: "2rem",
              fontWeight: "Bold",
              marginTop: "1.5rem",
              backgroundColor: "none",
            }}
          >
            Opinion of Nepal
          </MenuItem>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Opinion List
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Editors List
          </Menu.Item>
          <Menu.Item key="4" icon={<AppstoreOutlined />}>
            Opinion Pending
          </Menu.Item>
          <Menu.Item key="5" icon={<MailOutlined />}>
            User Management
          </Menu.Item>
          <Menu.Item key="6" icon={<ContainerOutlined />}>
            My Opinions
          </Menu.Item>
          <Menu.Item key="7" icon={<MenuFoldOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "none" }}>
          <div style={{ float: "right" }}>
            <h3> Sameer Pokharel </h3>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: "520px" }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright 2021 Opinion of Nepal | Powered by @illionSo
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
