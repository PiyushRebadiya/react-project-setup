import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  BarsOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Dashboard from "../../pages/dashboard/index";
import { useState } from "react";
import About from "../../pages/about";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const SearchDetailsByConsultationId = () => {
  return <h1>hello</h1>;
};
const items = [
  getItem("DahsBoard", "dashboard", <BarsOutlined />), //doc - pat
  getItem("About", "about", <BarsOutlined />), //doc - pat
  getItem("View Medicine Purchase", "viewMedicinePurchase", <BarsOutlined />), //doc-pat-ms
  // getItem('View Patient Details', 'viewpateintDetails', <TeamOutlined />),//doc - pat
  getItem("Add Patient Details", "addPateintDetails", <UsergroupAddOutlined />), //doc
  getItem(
    "Search Details by Consultation Id",
    "SearchDetailsByConsultationId",
    <UsergroupAddOutlined />
  ), //doc
];

const HeaderComponents = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [componentKey, setComponentKey] = useState("dashboard");
  const componentKeyVsHeader = {
    dashboard: "This is dashboard page",
    about: "About",
    viewMedicinePurchase: "View Medicine Purchase",
    addPateintDetails: "Add Patient Details",
    SearchDetailsByConsultationId: "Search Details by Consultation Id",
  };

  const componentKeyVsComponent = {
    dashboard: Dashboard,
    about: About,
    viewMedicinePurchase: Dashboard,
    addPateintDetails: Dashboard,
    SearchDetailsByConsultationId: SearchDetailsByConsultationId,
  };

  const navigate = useNavigate();

  const componentHeader = componentKeyVsHeader[componentKey];
  const menuClickHandler = (props) => {
    console.log(props, "props");
    setComponentKey(props?.key);
    navigate(`/${props?.key}`);
  };
  const Component = componentKeyVsComponent[componentKey];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const isAuthenticated = JSON.parse(localStorage.getItem("login"));

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
      {isAuthenticated && (
        <>
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
              style={{ minWidth: 1000 }}
            >
              <div
                style={{
                  height: 32,
                  margin: 16,
                  background: "rgba(255, 255, 255, 0.2)",
                  minWidth: 100,
                }}
              />
              <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
                onClick={menuClickHandler}
              />
            </Sider>
            <Layout className="site-layout">
              <Header
                style={{
                  padding: 0,
                  background: colorBgContainer,
                }}
              />
              <Content
                style={{
                  margin: "0 16px",
                }}
              >
                <Breadcrumb
                  style={{
                    margin: "16px 0",
                  }}
                >
                  <Breadcrumb.Item>{componentHeader}</Breadcrumb.Item>
                  {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                </Breadcrumb>
                <div
                  style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                  }}
                >
                  <Component />
                </div>
              </Content>
              <Footer
                style={{
                  textAlign: "center",
                }}
              >
                Ant Design ©2023 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </>
      )}

      {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
      <Outlet />
    </div>
  );
};

export default HeaderComponents;
