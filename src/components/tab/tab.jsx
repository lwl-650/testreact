import { Layout, Menu } from 'antd';
import * as React from "react"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Switch,
    Navigate
} from 'react-router-dom'
import {mainRoutes} from "../../router/routes"
const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
            {
                mainRoutes.map(route => {
                    return <Route path={route.to} component={route.component} key={route.to}></Route>
                })
            }

                    </Routes>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default () => <SiderDemo />;