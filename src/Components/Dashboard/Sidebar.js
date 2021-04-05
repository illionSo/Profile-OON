import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, Layout, Avatar, Space, Typography, Divider } from "antd";
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
import HeaderTitle from "./HeaderTitle";
const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

const Sidebar = () => {
  const [value, setValue] = useState("  ");

  const handleClick = e => {
    const val = e.target.innerHTML;
    // const cls = e.target.currentTarget;

    // console.log(val);
    setValue(val);
  };

  useEffect(() => {
    console.log(value);
    const val = window.localStorage.getItem("value");
    setValue(JSON.parse(val));
  }, []);
  useEffect(() => {
    console.log(value);
    window.localStorage.setItem("value", JSON.stringify(value));
  });

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
              <Link to="/" onClick={handleClick}>
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/opinionlist" onClick={handleClick}>
                Opinion List
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/editors" onClick={handleClick}>
                Editors List
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to="/writers" onClick={handleClick}>
                Writers List
              </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<VideoCameraOutlined />}>
              <Link to="/usermanagement" onClick={handleClick}>
                User Management
              </Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<UploadOutlined />}>
              <Link to="/myopinion" onClick={handleClick}>
                My Opinion
              </Link>
            </Menu.Item>

            <Menu.Item key="7" icon={<ContainerOutlined />}>
              <Link to="/setting" onClick={handleClick}>
                {" "}
                Setting
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0, background: "#E5E5E5" }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggleCollapsed,
              }
            )}

            <HeaderTitle value={value} />

            <div style={{ float: "right" }}>
              <Space>
                <div style={{ marginRight: "12rem" }}>
                  <SearchOutlined size={30} style={customStyle.iconStyle1} />
                  <BellOutlined size={30} style={customStyle.iconStyle} />
                </div>{" "}
                <div>
                  <Divider
                    type="vertical"
                    style={{ marginLeft: "-10rem", height: "27px" }}
                  />
                </div>
                <Title level={5} style={customStyle.userStyle}>
                  Suman Bhattarai
                </Title>
                <Avatar
                  size={40}
                  style={{ marginRight: "1em" }}
                  src="https://images.unsplash.com/photo-1567168409016-c73ab82ef45b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=342&q=80"
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
              background: "#fff",
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
          <Footer style={{ textAlign: "center", backgrounbd: "#E5E5E5" }}>
            {" "}
            Copyright 2021 Opinion of Nepal | Powered by @illionSo
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

const customStyle = {
  iconStyle: {
    color: " #C5C7CD",
    boxSizing: "border-box",
    fontSize: "18px",
  },
  iconStyle1: {
    color: " #C5C7CD",
    boxSizing: "border-box",
    fontSize: "18px",
    marginRight: "1.5rem",
  },
  userStyle: {
    position: "absolute",
    top: "22px",
    right: "69px",
  },
};
export default Sidebar;
