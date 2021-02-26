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
import { message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { localStorage } from '../../utils/storage';
import Kols from './components/Kols';

const Kol: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [params, setParams] = useState<KolParams>({
    page: 1,
    per_page: 40,
  } as KolParams);

  const [datas, setDatas] = useState<CelebrityResultType[]>([]);
  const [userLoginState, setUserLoginState] = useState<API.LoginStateType>({});
  const [type, setType] = useState<string>('account');
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
      handleAdd(item);
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

  return (
    <PageContainer>
      <div className={styles.kols}>
        {datas.map((item) => (
          <Kols params={item} />
        ))}
      </div>
    </PageContainer>
  );
};

export default Kol;
