import { CelebrityResultType } from '@/services/celebrity';
import { Avatar, Card, Rate, Space, Typography } from 'antd';
import React from 'react';

import styles from './index.less';
const { Text, Title, Link } = Typography;

interface propsParams {
  params: CelebrityResultType;
}
const Kols = (props: propsParams) => {
  return (
    <div className={styles.container}>
      <Card style={{ width: 220, textAlign: 'center' }}>
        <Avatar size={64} src={`https://photo.cdn.kolzhipin.com/${props.params.head_img}`} />
        <div className={styles.name}>{props.params.name}</div>
        <div>
          <Text type="warning">已入库</Text> | <Text type="warning">已完善信息</Text>
        </div>
        <div>
          <Text>{props.params.country}</Text>
        </div>
        <div>
          <Text>{props.params.language}</Text>
        </div>
        <div>
          <Text>粉丝量:{props.params.fans_num}</Text>
        </div>

        <Rate value={props.params.grade} />
        <div className={styles.link}>
          <Link href="https://ant.design" target="_blank">
            收藏
          </Link>
          <Link href={`https://www.youtube.com/channel/${props.params.channel_id}`} target="_blank">
            查看YB
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Kols;
