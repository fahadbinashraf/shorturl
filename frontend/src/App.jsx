import { Card, Layout, ConfigProvider } from "antd";
import React from "react";
import URLForm from "./components/URLForm";

const App = () => {
  const { Header, Content } = Layout;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#009ba5",
        },
      }}
    >
      <Layout className="layout">
        <Header>
          <div className="logo">SHORTURL</div>
        </Header>
        <Content style={{ padding: "0 150px" }}>
          <Card
            bordered={false}
            style={{
              width: 400,
              margin: "0 auto",
              marginTop: 100,
            }}
          >
            <URLForm />
          </Card>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
