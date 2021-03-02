import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import styles from './index.less';
import {
  addCelebrity,
  CelebrityParamType,
  CelebrityResultType,
  KolParams,
  kol_list,
  kol_login,
} from '@/services/celebrity';
import {
  Button,
  Card,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  message,
  Radio,
  Row,
  Select,
} from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { localStorage } from '../../utils/storage';
import Kols from './components/Kols';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const { Option } = Select;
const Kol: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [params, setParams] = useState<KolParams>({
    page: 1,
    per_page: 40,
  } as KolParams);

  const [datas, setDatas] = useState<CelebrityResultType[]>([
    {
      channel_id: 'UCv80wgA_QUvFijiTLJlJqeg',
      country: '俄罗斯',
      fans_num: 1600000,
      grade: 5,
      head_img: 'img/kol/user_header/UCv80wgA_QUvFijiTLJlJqeg.jpg',
      id: 135838,
      is_auth: 1,
      is_complete: true,
      is_cop: 1,
      is_mcn: 1,
      language: '俄语,塞尔维亚语',
      name: 'Sweet Home',
      user_id: 135838,
      user_type: 'ytb',
      video_prediction_play_num: 171865,
    },
    {
      channel_id: 'UCDIJhfKjVYlbo5-oQvM5EqQ',
      country: '美国',
      fans_num: 929000,
      grade: 3,
      head_img: 'img/kol/user_header/UCDIJhfKjVYlbo5-oQvM5EqQ.jpg',
      id: 123896,
      is_auth: 1,
      is_complete: true,
      is_cop: 1,
      is_mcn: 1,
      language: '英语',
      name: 'Professor Akali',
      user_id: 123896,
      user_type: 'ytb',
      video_prediction_play_num: 105242,
    },
  ]);
  const [userLoginState, setUserLoginState] = useState<API.LoginStateType>({});
  const [type, setType] = useState<string>('account');
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  console.log(history.location.search);

  const onLogin = async () => {
    const res: any = await kol_login({ username: 'jennie', password: 'jennie321' });
    if (res.status == 'success') {
      localStorage.setItem('kol_token', res.data.token);
    } else {
      message.error('login error');
    }
  };

  const onSearch = async () => {
    const res: any = await kol_list(params);
    if (res.status === 'success') {
      setDatas(res.data.data);
    }
  };

  useEffect(() => {
    datas.forEach((item: CelebrityParamType) => {
      // handleAdd(item);
    });
  }, [datas]);

  useEffect(() => {
    // onLogin();
    // onSearch();
  }, []);

  /**
   * 添加节点
   */
  const handleAdd = async (param: CelebrityParamType) => {
    try {
      await addCelebrity(param);
    } catch (error) {
      message.error('添加失败请重试！');
    }
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
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
        <div className={styles.kols}>
          <Kols params={datas} />
        </div>
      </Card>
    </PageContainer>
  );
};

export default Kol;
