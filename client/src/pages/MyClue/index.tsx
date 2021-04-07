import styles from './index.less';
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select, Space, Table } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const MyClue: React.FC = () => {
  const assemblyData = [
    { icon: <LoginOutlined />, color: 'magenta', name: '新建', mainnum: 1 },
    { icon: <LoginOutlined />, color: 'red',     name: '新建', mainnum: 1 },
    { icon: <LoginOutlined />, color: 'volcano', name: '新建', mainnum: 0 },
    { icon: <LoginOutlined />, color: 'orange',  name: '新建', mainnum: 1 },
    { icon: <LoginOutlined />, color: 'lime',    name: '新建', mainnum: 1 },
    { icon: <LoginOutlined />, color: 'gold',    name: '新建', mainnum: 1 },
  ];
  const [form] = Form.useForm();

  //from表单数据
  const getfrom = () => {
    return (
      <div>
        <Row gutter={24}>
          <Col span={4}>
            <Form.Item name="search" label="">
              <DatePicker
                style={{width:'100%'}}
                onChange={onChangeData}
                placeholder="线索发布时间"
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Select placeholder="线索来源"></Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Input placeholder="客户名称" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Input placeholder="公司名称" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Input placeholder="手机/微信" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="search" label="">
              <Select placeholder="线索状态"></Select>
            </Form.Item>
          </Col>
        </Row>
      </div>
    );
  };

  //创建时间
  const onChangeData = (time: any, timeString: any) => {};

  //from表单成功回调
  const onFinish = () => {};

  const dataSource: object[] = [];

  const columns: object[] = [];

  const topContent = (props: any) => (
    <Col span={4}>
      <Row className={`${styles.content} ${styles[props.color]}`}>
        <Col span={8} className={styles.icon}>
          {props.icon}
        </Col>
        <Col span={16}>
          <div className={styles.right}>
            <div>{props.mainnum}</div>
            <div>{props.name}</div>
          </div>
        </Col>
      </Row>
    </Col>
  );

  return (
    <PageContainer>
      <Row gutter={[16, 16]}>{assemblyData.map((item: any) => topContent(item))}</Row>
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
              <Button style={{ margin: '0 8px' }} type="ghost" htmlType="submit">
                添加代理
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card style={{ marginTop: '24px' }}>
        <Table bordered dataSource={dataSource} columns={columns} />
      </Card>
    </PageContainer>
  );
};

export default MyClue;
