import Sidebar from "./Sidebar"
import { Layout, Button, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { endpoints } from "../../services/apis";
import axios from "axios";
const { Header, Content, Sider } = Layout;

const ManageUsers = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [users, setUsers] = useState([]);


  async function getUsers(){
    try {
      const response = await axios.get(endpoints.getAllUsers, {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtwQGdtYWlsLmNvbSIsImlkIjoiNjRmNDcxM2QyNTllNjkyODU2NTdjMDI4Iiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzAwNTQxMzc0LCJleHAiOjE3MDA2Mjc3NzR9.ds1VUbZ3CeWuNa7oJmPPnzabEoahAt5X_XsUpkwt_HI`
        }
      });
      setUsers(response.data.users);
    } catch (error) {
      console.log("error: " + JSON.stringify(error));
    }
  }

  useEffect(() => {
    getUsers();
    console.log("users", users);
  }, []);


  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <Sidebar />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: 'fixed',
            zIndex: 1,
            width: '100%',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '84px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >

          <div className="text-black text-xl">
            <h1>
              This is a Manage Users
            </h1>
          </div>

        </Content>
      </Layout>
    </Layout>
  )
}

export default ManageUsers



