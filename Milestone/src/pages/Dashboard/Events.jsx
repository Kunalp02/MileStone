import Sidebar from "./Sidebar"
import { Layout, Button, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { Header, Content, Sider } = Layout;

const Events = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState({
    name:'',
    descp: '',
    co: '',
    participants: null,
    fees:null,
  })

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(data);
}

const changeHandler = (e) => {
    console.log(e.target.value)
    setData({
        ...data,
        [e.target.name]: e.target.value,
    })
}   


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
            marginTop: '80px',
            minHeight: 280,
            background: colorBgContainer,
          }}
        >

          <div className="mt-5">
            <form className="w-[100%] h-screen flex flex-col align-content-center flex-wrap text-2xl text-white" onSubmit={submitHandler}>
              <h1 className="text-center text-black text-3xl font-semibold mb-5">Add Event</h1>
              <div className="flex flex-row mb-3 gap-2">
                <div className="w-[100%] mb-2">
                  <label className="block text-sm font-medium text-gray-700">Event Name</label>
                  <input
                    type="text"     
                    name="name"
                    placeholder="Event Name"
                    className="p-2 rounded"
                    onChange={changeHandler}
                    value={data.name} 
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">Event Co-Ordinators</label>
                  <input
                    type="text"     
                    name="co"
                    placeholder="Event co-ordinator"
                    className="p-2 rounded text-white"
                    onChange={changeHandler}
                    value={data.co}
                  />
                </div>
              </div>


              <div className="gap-2">
                <div className="w-[100%]">
                    <label className="block text-sm font-medium text-gray-700">Event Desciption</label>
                    <textarea
                      type="text"     
                      name="descp"
                      placeholder="Event description"
                      className="p-2 rounded w-[100%] min-h-[250px] text-white"
                      onChange={changeHandler}
                      value={data.descp}
                    />
                </div>
              </div>



              <div className="flex flex-row gap-2" >                
                <div>
                    <label className="block text-sm font-medium text-gray-700">Max Participants</label>
                    <input
                      type="number"     
                      name="participants"
                      placeholder="1 or 2"
                      className=" rounded-lg px-2 py-2"
                      onChange={changeHandler}
                      value={data.participants}
                    />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700">Fees</label>
                  <input type="number"className=" text-white rounded-lg px-2 py-2" placeholder="in RS" onChange={changeHandler} value={data.fees}/>
                </div>
              </div>


              <button className="text-white bg-indigo-900 px-2 py-2  rounded flex mx-auto mt-5">
                Add Event
              </button>
            </form>

          </div>

        </Content>
      </Layout>
    </Layout>
  )
}

export default Events
