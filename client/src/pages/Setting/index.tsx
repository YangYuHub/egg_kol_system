import {
  addCelebrity,
  CelebrityParamType,
  CelebrityResultType,
  KolParams,
  getKols,
  login,
  kol_list,
} from '@/services/celebrity';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Badge, Button, Card, Col, List, message, Progress, Row, Skeleton } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';

const Setting: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [kolPercent, setKolPercent] = useState(0);
  const [onKol, setOnKol] = useState(false);
  const [params, setParams] = useState<KolParams>({
    page: 1,
    per_page: 40,
  } as KolParams);

  const onKolSearch = async () => {
    const res = await getKols(params);
    if (res.data) {
      res.data.forEach((item: CelebrityResultType) => editCelebrity(item, res.data));
      setParams({ page: params.page++ } as KolParams);
    }
  };

  const onKolList = async () => {
    const res = await kol_list(params);
    console.log(res);
    if (res) {
    }
    // await addCelebrity(param);
  };

  const editCelebrity = async (param: CelebrityParamType, res: any) => {
    try {
      await addCelebrity(param);
      setKolPercent(((res.total - params.per_page) / res.total) * 100);
      if (res.current_page <= res.last_page) {
        // setTimeout(() => {
        console.log(res.current_page);
        onKolSearch();
        // }, 3000);
      } else {
        setOnKol(false);
      }
    } catch (error) {}
  };

  const onClick = async (item: string) => {
    switch (item) {
      case 'Kol':
        console.log(localStorage.getItem('kol_token'), 1);
        if (localStorage.getItem('kol_token')) {
          setOnKol(true);
          // onKolSearch();
          onKolList();
        } else {
          const res = await onLogin();
          res && onKolList();
          // res && onKolSearch();
        }
        break;
    }
  };

  const onLogin = async () => {
    const res = await login({ username: 'jennie', password: 'jennie321' });
    if (res.status === 200) {
      localStorage.setItem('kol_token', res.data.token);
      return true;
    } else {
      message.error('login error');
      return false;
    }
  };

  return (
    <PageContainer>
      <div className={styles.container}>
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
                  <Button
                    key="list-loadmore-edit"
                    type={'link'}
                    disabled={onKol}
                    onClick={() => onClick(item.title)}
                  >
                    {onKol ? '正在爬取...' : '开始'}
                  </Button>,
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
