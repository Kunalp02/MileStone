import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Layout, Button, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import Sidebar from './Sidebar';

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const isAuthenicated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    console.log('User: ', user);

    if (!isAuthenicated) {
      console.log('User is not authenticated!');
      toast.error('Protected Route! Please login to continue.');

      const timer = setTimeout(() => {
        console.log('redirecting to login page');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isAuthenicated) {
    return <Navigate to="/login" replace />;
  } else {
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
            
            <div className="text-black text-xl flex justify-start items-center w-[100%] gap-10 font-sans font-semibold ">
              <div className='w-[320px] h-[220px] bg-indigo-900 rounded-lg flex flex-col justify-center items-center text-slate-50 text-3xl'>
                <p className=''>No of Events</p>
                <span>50</span>
              </div>


              <div className='w-[320px] h-[220px] bg-indigo-900 rounded-lg flex flex-col justify-center items-center text-slate-50 text-3xl'>
                <p className=''>No of Participants</p>
                <span>50</span>
              </div>

              <div className='w-[320px] h-[220px] bg-indigo-900 rounded-lg flex flex-col justify-center items-center text-slate-50 text-3xl'>
                <p className=''>No of Co-ordinators</p>
                <span>50</span>
              </div>

            </div>


          </Content>
        </Layout>
      </Layout>
    );
  }
};

export default Dashboard;
