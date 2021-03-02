import { CelebrityResultType } from '@/services/celebrity';
import { Avatar, Card, Rate, Typography } from 'antd';
import React from 'react';

import styles from './index.less';
const { Text, Link } = Typography;

interface propsParams {
  params: CelebrityResultType[];
}
const Kols = (props: propsParams) => (
  <>
    {props.params.map((item, index) => (
      <div className={styles.container} key={index}>
        <Card style={{ width: 220, textAlign: 'center' }}>
          <Avatar size={64} src={`https://photo.cdn.kolzhipin.com/${item.head_img}`} />
          <div className={styles.name}>{item.name}</div>
          <div>
            <Text type="warning">已入库</Text> | <Text type="warning">已完善信息</Text>
          </div>
          <div>
            <Text>{item.country}</Text>
          </div>
          <div>
            <Text>{item.language}</Text>
          </div>
          <div>
            <Text>粉丝量:{item.fans_num}</Text>
          </div>
          <Rate value={item.grade} />
          <div className={styles.link}>
            <Link href="https://ant.design" target="_blank">
              收藏
            </Link>
            <Link href={`https://www.youtube.com/channel/${item.channel_id}`} target="_blank">
              查看YB
            </Link>
          </div>
        </Card>
      </div>
    ))}
  </>
);

export default Kols;
