import styles from './index.less'
import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select, Space, Table } from 'antd';
import Assembly from '../../../components/Commonpublic/index';
import { LoginOutlined } from '@ant-design/icons';
import AddModal from './component/addModal'

const Custom: React.FC = () => {
  const assemblyData = [
    { icon: <LoginOutlined />, color: 'red', name: '新建', mainnum: 1 },
    { icon: <LoginOutlined />, color: 'red', name: '新建', mainnum: 1 },
    { icon: <LoginOutlined />, color: 'red', name: '新建', mainnum: 0 },
    { icon: <LoginOutlined />, color: 'red', name: '新建', mainnum: 1 },
    { icon: <LoginOutlined />, color: 'red', name: '新建', mainnum: 1 },
    { icon: <LoginOutlined />, color: 'red', name: '新建', mainnum: 1 },
  ];
  const [form] = Form.useForm();

  //添加弹窗flag
  const [isModalVisible, setisModalVisible] = useState(false)

  //from表单数据
  const getfrom = ()=>{
    return (
      <div>
        <Row gutter={24}>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Space direction="vertical">
                <DatePicker style={{width:'249px'}} onChange={onChangeData} placeholder='线索发布时间' />
              </Space>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Select placeholder='线索来源'>
                
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Input placeholder='客户名称'/>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Input  placeholder="公司名称" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Input placeholder='手机/微信'/>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Select placeholder='线索状态'>

              </Select>
            </Form.Item>
          </Col>
        </Row>
      </div>
    )
  }

  //创建时间
  const onChangeData = (time:any, timeString:any)=>{
  }

  //from表单成功回调
  const onFinish = ()=>{
  }

  const dataSource:object[] = [];
  
  const columns:object[] = [];

  //添加客户
  const addCustom = ()=>{
    setisModalVisible(true);
  }

  //弹窗方法 
  const addCustomFlag = (falg:boolean)=>{
    setisModalVisible(falg);
  }

  return (
    <PageContainer>
      <div  className = {styles.Topbox}>
      {assemblyData.map((item,index)=>{
        return <Assembly key={index} {...item}/>
      })}
      </div>
      <Card>
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          {getfrom()}
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ margin: '0 8px' }} type="primary" htmlType="submit">
                重置
              </Button>
              <Button   type="ghost" onClick={addCustom}>
                新增客户
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card style={{marginTop:'24px'}}>
        <Table  bordered dataSource={dataSource} columns={columns} />

      </Card>

      <AddModal isModalVisible={isModalVisible} addCustom={addCustomFlag}/>
    </PageContainer>
  );
};


export default Custom;
