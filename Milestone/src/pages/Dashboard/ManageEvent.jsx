import Sidebar from "./Sidebar"
import { Layout, Button, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllEventService } from "../../services/eventService";
import { endpoints } from "../../services/apis";
const { Header, Content, Sider } = Layout;
import axios from "axios";

const ManageEvent = () => {
  // const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const [events, setEvents] = useState([]);

  // const events = useSelector((state) => state.events.events);
  const token = useSelector((state) => state.auth.token);
  async function getAllEvents(){
    try {
      const response = await axios.get(endpoints.getAllEvents, {
        headers: {
          Authorization: `${token}`
        }
      });
      setEvents(response.data.events)
    } catch (error) {
      console.log("error: " + error)
    }
    
    
  }

  useEffect(() => {
    // dispatch(getAllEventService, token);
    // console.log(events, token);
    getAllEvents();
    console.log("events", events);
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
        <Header          style={{
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
              Events List Of All Departments
            </h1>
            
            <div className="mt-5">
              {events.length > 0 ? (
                events.map((event) => (
                  <div key={event._id}>
                    <h2>{event.event_name}</h2>
                    <p>Description: {event.event_description}</p>
                    <p>Date: {new Date(event.event_date).toLocaleDateString()}</p>
                    <p>Fee: {event.event_fee}</p>
                  </div>
                ))
              ) : (
                <p>No events available</p>
              )}
          </div>
            
          </div>

        </Content>
      </Layout>
    </Layout>
  )
}

export default ManageEvent
