import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;



function App() {
  return (
    <Layout>

      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="inbox" />
            <span className="nav-text">Inbox</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="form" />
            <span className="nav-text">Drafts</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="select" />
            <span className="nav-text">Sent</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="delete" />
            <span className="nav-text">Trash</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: '#fff', padding: 0 }} />

        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
            content
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    
    </Layout>
  );
}

export default App;
