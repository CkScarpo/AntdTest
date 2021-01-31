import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { CarryOutOutlined, FolderAddOutlined, FolderOutlined, FormOutlined, PictureOutlined, ScheduleOutlined } from '@ant-design/icons'

import './index.css';
import MenuDWF from '../../components/Menu/menu';


const { Content } = Layout;


function DWF() {

  return <>
    
    <Layout>
      <MenuDWF />
      <div className="icons" style={{ fontSize: 25, padding: 5 }}>
          <FormOutlined style={{ paddingLeft: 10 }} /> 
          <CarryOutOutlined style={{ paddingLeft: 10 }} />
          <ScheduleOutlined style={{ paddingLeft: 10 }}  />
          <PictureOutlined style={{ paddingLeft: 10 }}  />
          <FolderOutlined style={{ paddingLeft: 10 }}  />
          <FolderAddOutlined style={{ paddingLeft: 10 }}  />
      </div>
      <div className="bread">
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Content style={{ fontSize: 20, padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 15, minHeight: 280 }}>   
        </div>
      </Content>
    </Layout>
  </>
}

export default DWF;