import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Button, Col, Form, Input, Row, Select, DatePicker, Space, Cascader, InputNumber, Table } from 'antd';
import Column from 'antd/lib/table/Column';

const Institutions: React.FC = () => {
  const [form] = Form.useForm();
  
  const { Option } = Select;

  //网红数量
  const onChange = (num:number)=>{

  }
  //创建时间
  const onChangeData = (time:any, timeString:any)=>{
    
  }
  //from表单数据
  const getfrom = ()=>{
    return (
      <div>
        <Row gutter={24}>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Select placeholder='运营成员'>
                
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Input placeholder='网红代理名称'/>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Cascader  placeholder="国家/地区" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Select placeholder='代理类型'>

              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <InputNumber placeholder='网红数量' onChange={onChange}/> - <InputNumber/>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Select placeholder='网红类型'>

              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Select placeholder='合作性'>
                
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Space direction="vertical">
                <DatePicker onChange={onChangeData} placeholder='创建时间' />
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </div>
    )
  }
  //from表单成功回调
  const onFinish = ()=>{

  }
  //table数据
  const tabledata:[] = [
   
  ];

  return (
    <div>
      <PageContainer>
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
                <Button  style={{ margin: '0 8px' }} type="ghost" htmlType="submit">
                  添加代理
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
        <Card style={{ marginTop: '24px' }}>
        <Table bordered={true} dataSource={tabledata}>
          <Column title="代理名称" dataIndex="age" key="age" />
          <Column title="国家/地区" dataIndex="address" key="address" />
          <Column title="创建时间" dataIndex="address" key="address" />
          <Column title="添加人" dataIndex="address" key="address" />
          <Column title="经济公司网站" dataIndex="address" key="address" />
          <Column title="代理类型" dataIndex="address" key="address" />
          <Column title="联系人" dataIndex="address" key="address" />
          <Column title="联系方式" dataIndex="address" key="address" />
          <Column title="网红数量" dataIndex="address" key="address" />
          <Column title="网红类型" dataIndex="address" key="address" />
          <Column title="播放量分布" dataIndex="address" key="address" />
          <Column title="合作性" dataIndex="address" key="address" />
          <Column
            title="操作"
            key="action"
            render={(text, record) => (
              <Space size="middle">
              </Space>
            )}
          />
        </Table>
        </Card>
      </PageContainer>
    </div>
  );
};

export default Institutions;
