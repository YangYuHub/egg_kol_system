import {
  addCelebrity,
  CelebrityParamType,
  CelebrityResultType,
  KolParams,
  kol_list,
} from '@/services/celebrity';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Badge, Button, Card, Col, List, Progress, Row, Skeleton } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';

const Setting: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [kolPercent, setKolPercent] = useState(0);
  const [params, setParams] = useState<KolParams>({
    page: 1,
    per_page: 40,
  } as KolParams);

  const onKolSearch = async () => {
    const res: any = await kol_list(params);
    if (res.status === 'success') {
      res.data.data.forEach((item: CelebrityResultType) => editCelebrity(item, res.data));
    }
  };

  const editCelebrity = async (param: CelebrityParamType, res: any) => {
    try {
      await addCelebrity(param);
      setKolPercent(((res.total - params.per_page) / res.total) * 100);
      if (res.current_page <= res.last_page) {
        await onKolSearch();
      }
    } catch (error) {}
  };

  const onClick = (item: string) => {
    switch (item) {
      case 'Kol':
        onKolSearch();
        break;
    }
  };
  (603400 - 40) / 603400;

  return (
    <PageContainer>
      <div className={styles.container}>
        <Card>
          <Row>
            <Col span={2}>
              <Button type="primary">get Token</Button>
            </Col>
            <Col style={{ display: 'flex', alignItems: 'center' }}>
              <Badge status="success" />
              login success
            </Col>
          </Row>
        </Card>
        <Card style={{ marginTop: '24px' }}>
          <List
            className="demo-loadmore-list"
            loading={loading}
            itemLayout="horizontal"
            dataSource={[
              { title: 'Kol', description: '点击开始爬取Kol数据', percent: kolPercent },
              { title: 'Kol1', description: '点击开始爬取Kol数据', percent: 0 },
              { title: 'Kol2', description: '点击开始爬取Kol数据', percent: 100 },
            ]}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <a key="list-loadmore-edit" onClick={() => onClick(item.title)}>
                    开始
                  </a>,
                  <a key="list-loadmore-more">暂停</a>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={item.title}
                  description={item.description}
                />
                <div style={{ width: '300px' }}>
                  <Progress percent={item.percent} status="active" />
                </div>
              </List.Item>
            )}
          />
        </Card>
      </div>
    </PageContainer>
  );
};

export default Setting;
