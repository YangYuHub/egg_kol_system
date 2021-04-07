import {
  addCelebrity,
  CelebrityParamType,
  CelebrityResultType,
  KolParams,
  getKols,
  login,
  kol_list,
  kol_baseinfo,
} from '@/services/celebrity';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Button, Card, List, message, Progress } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';
import ExportJsonExcel from 'js-export-excel'; //excel表格导出

const Setting: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [kolPercent, setKolPercent] = useState(0);
  const [onKol, setOnKol] = useState(false);
  const [kolBaseinfo, setKolBaseinfo] = useState<any>([]);
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
      case 'OK':
        onBase();
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

  const onKolBaseInfo = async (id: string) => {
    const res: any = await kol_baseinfo(id);
    if (res.status === 'success') {
      setKolBaseinfo([
        ...kolBaseinfo,
        {
          id: res.data.id,
          name: res.data.name,
          whatsapp: res.data.whatsapp,
          email: res.data.email,
          mobile: res.data.mobile,
          private_contact: res.data.private_contact,
          youtube_video_list: res.data.youtube_video_list,
        },
      ]);
    }
  };

  const onBase = async () => {
    // const ids = datas.map((item) => item.id);
    const ids = [135838];
    ids.forEach((item) => {
      setTimeout(() => {
        onKolBaseInfo(item.toString());
      }, 1000);
    });
    // console.log(kolBaseinfo);
    // exportExcel(kolBaseinfo);
  };

  const exportExcel = () => {
    const datas = kolBaseinfo;
    let option: any = {};

    let dataTable = []; //新建数组放数据

    console.log(datas);

    if (datas) {
      for (const data of datas) {
        console.log(data);

        if (data) {
          let obj = {
            id: data.classid,

            name: data.classname,
          };

          dataTable.push(obj);
        }
      }
    }

    console.log(dataTable);

    option.fileName = 'yb'; //文件名

    option.datas = [
      {
        sheetData: dataTable, //数据

        sheetName: '班级信息', //sheet名字 // sheetFilter: [dataTable.id, dataTable.name],//列过滤 // sheetFilter 列过滤(只有在 data 为 object 下起作用)(可有可无)

        sheetHeader: ['id', '名称', 'whatsapp', '邮箱', '移动电话', '私人联系方式', 'youtube地址'], //// 第一行
      },
    ];

    var toExcel = new ExportJsonExcel(option);

    toExcel.saveExcel(); //保存
  };

  return (
    <PageContainer>
      <div className={styles.container}>
        <Card>
          <Button type="primary" onClick={exportExcel}>
            导出
          </Button>
        </Card>
        <Card style={{ marginTop: '24px' }}>
          <List
            className="demo-loadmore-list"
            loading={loading}
            itemLayout="horizontal"
            dataSource={[
              { title: 'Kol', description: '点击开始爬取Kol数据', percent: kolPercent },
              { title: 'OK', description: '点击开始爬取Kol数据', percent: 0 },
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
