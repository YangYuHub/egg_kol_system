import { DownOutlined, UpOutlined } from '@ant-design/icons';
import {
  Button,
  Input,
  Card,
  Row,
  Col,
  Form,
  Checkbox,
  Cascader,
  Select,
  Radio,
  Tag,
  Divider,
  Table,
} from 'antd';
import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';

const { Option } = Select;
const Custom: React.FC = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const selectBefore = (
    <Select className="select-after">
      <Option value=".com">频道号搜索</Option>
      <Option value=".jp">昵称模糊搜索</Option>
      <Option value=".cn">网红邮箱搜索</Option>
      <Option value=".org">备注搜索</Option>
    </Select>
  );

  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (value: any) => {
    console.log(value);
  };

  const getFields = () => {
    return (
      <>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name="search" label="">
              <Input addonBefore={selectBefore} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="country_id" label="国家">
              <Cascader options={options} onChange={onChange} placeholder="Please select" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="isku" label="是否有营销推广">
              <Select>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name="lang" label="语言">
              <Select>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="category_id" label="博主类型">
              <Select>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="product_type" label="产品类型">
              <Select>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {expand && (
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name="fans_num" label="粉丝量">
                <Input.Group compact>
                  <Input style={{ width: 100, textAlign: 'center' }} placeholder="K" />
                  <Input
                    className="site-input-split"
                    style={{
                      width: 30,
                      borderLeft: 0,
                      borderRight: 0,
                      pointerEvents: 'none',
                    }}
                    placeholder="~"
                    disabled
                  />
                  <Input
                    className="site-input-right"
                    style={{
                      width: 100,
                      textAlign: 'center',
                    }}
                    placeholder="K"
                  />
                </Input.Group>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="fsNumber" label="单个视频预估播放量">
                <Input.Group compact>
                  <Input style={{ width: 100, textAlign: 'center' }} placeholder="K" />
                  <Input
                    className="site-input-split"
                    style={{
                      width: 30,
                      borderLeft: 0,
                      borderRight: 0,
                      pointerEvents: 'none',
                    }}
                    placeholder="~"
                    disabled
                  />
                  <Input
                    className="site-input-right"
                    style={{
                      width: 100,
                      textAlign: 'center',
                    }}
                    placeholder="K"
                  />
                </Input.Group>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="fsNumber" label="单个视频预估播放量">
                <Checkbox.Group onChange={onChange}>
                  <Checkbox value="A">facebook</Checkbox>
                  <Checkbox value="B">twitter</Checkbox>
                  <Checkbox value="C">instagram</Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </Col>
          </Row>
        )}
        {expand && (
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name="sex" label="性别选择">
                <Checkbox.Group onChange={onChange}>
                  <Checkbox value="A">男</Checkbox>
                  <Checkbox value="B">女</Checkbox>
                  <Checkbox value="C">情侣</Checkbox>
                  <Checkbox value="D">其他</Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="isku" label="是否入库">
                <Radio.Group onChange={onChange}>
                  <Radio value={1}>MCN网红</Radio>
                  <Radio value={2}>已合作网红</Radio>
                  <Radio value={3}>普通入库</Radio>
                  <Radio value={4}>未入库</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        )}
        {expand && (
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name="sex" label="最近更新">
                <Radio.Group onChange={onChange}>
                  <Radio value={1}>7天</Radio>
                  <Radio value={2}>30天</Radio>
                  <Radio value={3}>90天</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="fsNumber" label="是否有联系方式">
                <Radio.Group onChange={onChange}>
                  <Radio value={1}>有邮箱</Radio>
                  <Radio value={2}>无邮箱</Radio>
                  <Radio value={3}>有whatsapp</Radio>
                  <Radio value={4}>有私人联系方式</Radio>
                  <Radio value={4}>无私人联系方式</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        )}
      </>
    );
  };
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any) => (
        <span>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <PageContainer>
      <Card>
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          {getFields()}
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button
                style={{ margin: '0 8px' }}
                onClick={() => {
                  form.resetFields();
                }}
              >
                Clear
              </Button>
              <a
                style={{ fontSize: 12 }}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                {expand ? <UpOutlined /> : <DownOutlined />} Collapse
              </a>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card style={{ marginTop: '24px' }}>
        <Table columns={columns} dataSource={data} />
      </Card>
    </PageContainer>
  );
};

export default Custom;
