import styles from './index.less'
import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Form, Button, Card, Col, Input, Row, Space, Table, Tabs } from 'antd';

const Custom: React.FC = () => {

  const { TabPane } = Tabs;

  const [form] = Form.useForm();
  //下部分导航点击事件
  function callback(key:any) {
    console.log(key);
  }

  //from表单数据
  const getfrom = ()=>{
    return (
      <div>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name="search" label="姓名">
              <Input placeholder='请输入'/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="search" label="手机">
              <Input  placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="search" label="渠道">
              <Input placeholder='请输入'/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name="search" label="微信">
              <Input placeholder='请输入'/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="search" label="公司">
              <Input  placeholder="请输入" />
            </Form.Item>
          </Col>
        </Row>
      </div>
    )
  }

  //点击保存
  const addCustom = ()=>{
    let data = form.getFieldsValue();
    console.log(data);
  }

  const dataSource:object[] = [];
  
  const columns:object[] = [];

  
  return (
    <PageContainer>
      <Card>
        <div style={{height:'65px'}}>
          <h1 style={{float:'left'}}>客户信息</h1>
          <Button style={{float:'right'}} onClick={addCustom} type="primary">保存</Button>
        </div>

        <div>
          <Form form={form}>
            {getfrom()}
          </Form>
        </div>
        
      </Card>
      <Card style={{marginTop:'24px'}}>
        <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="关联的线索" key="1">
            <Table  bordered dataSource={dataSource} columns={columns} />
          </TabPane>
          <TabPane tab="关联的项目" key="2">
            <Table  bordered dataSource={dataSource} columns={columns} />
          </TabPane>
        </Tabs>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Custom;
