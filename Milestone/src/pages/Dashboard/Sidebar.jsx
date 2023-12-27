import { Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';



const Sidebar = () => {



  return (
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1" icon={<UserOutlined />}>
        <NavLink to="/dashboard/"
           
        >Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <NavLink to="/dashboard/create-events" >
            Create Event
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        <NavLink to="/dashboard/manage-events">Manage Event</NavLink>
      </Menu.Item>
      <Menu.Item key="4" icon={<UploadOutlined />}>
        <NavLink to="/dashboard/manage-users" >Manage Users</NavLink>
      </Menu.Item>

      <Menu.Item key="5" icon={<UploadOutlined />}>
        <NavLink to="/dashboard/transactions" >Transactions</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
