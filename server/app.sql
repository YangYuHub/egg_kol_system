create database kol_system;

use kol_system;

--用户表
create table `user`(
    `id` int not null auto_increment,
    `username` varchar(20) default null comment '用户名',
    `password` varchar(64) default null comment '密码',
    `avatar` longtext comment '头像',
    `phone` varchar(20) default null comment '电话',
    `sign` varchar(300) default null comment '用户签名',
    `createTime` timestamp default null comment '创建时间',
    `updateTime` timestamp default null comment '更新时间',
    primary key(`id`)
) engine = InnoDB auto_increment = 1 default charset = utf8 comment = '用户表';

--网红表--
create table `celebrity`(
    `id` varchar(30) default null comment 'ID',
    `channel_id` varchar(70) default null comment '网红ID',
    `country` varchar(10) default null comment '所在地',
    `fans_num` bigint default null comment '粉丝量',
    `grade` int(1) default null comment 'VKOL推荐指数',
    `head_img` varchar(120) default null comment '头像地址',
    `is_auth` int default null comment '是否入库',
    `is_complete` boolean default null comment '是否已完善信息',
    `is_cop` int default null comment 'cop',
    `is_mcn` int default null comment 'mcn公司',
    `language` varchar(20) default null comment '语言',
    `name` varchar(20) default null comment '网红昵称',
    `user_id` bigint default null comment '用户ID',
    `user_type` varchar(10) default null comment '社区筛选',
    `video_prediction_play_num` int default null comment '视频预计播放量'
) engine = InnoDB default charset = utf8 comment = '网红信息表';