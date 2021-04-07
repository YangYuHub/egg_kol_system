create database kol_system;
use kol_system;
--admin员表
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
--线索表--
create table `clue`(
    `id` bigint default null comment 'ID',
    `admin_id` bigint default null comment '管理员ID',
    `content` varchar(200) default null comment '线索描述',
    `created_at` varchar(20) default null comment '创建时间',
    `grade` int default null comment '等级',
    `member_id` bigint default null comment '客户ID',
    `remark_by_member` varchar(100) default null comment '备注客户',
    `source_user_id` int default null comment '线索来源ID',
    `source_user_type` varchar(20) default null comment '渠道类型： 商务添加、网站客户、SEM添加、渠道客户',
    `status` varchar(20) default null comment '线索状态： 新建、分配商务已跟进、分配商务待跟进、已立项、无效线索（无需求）、非本渠道的线索、已签合同、已结算佣金、无法联系、已完成/已结案、待确认',
) engine = InnoDB default charset = utf8 comment = '线索信息表';
--客户表--
create table `member`(
    `id` bigint default null comment 'ID',
    `account` varchar(30) default null comment '账号/手机号码',
    `name` varchar(30) default null comment '客户名',
    `wechat` varchar(30) default null comment '微信',
    `source_user_type` varchar(30) default null comment '渠道',
    `industry` varchar(30) default null comment '行业',
    `company_name` varchar(50) default null comment '公司名称',
) engine = InnoDB default charset = utf8 comment = '客户信息表';
--公司表--
create table `company`(
    `id` bigint default null comment 'ID',
    `company_name` varchar(50) default null comment '公司名称',
    `industry` varchar(30) default null comment '行业',
    `baseinfo` varchar(60) default null comment '公司简介',
    `website` varchar(100) default null comment '网站地址',
    `created_at` varchar(100) default null comment '创建时间',
) engine = InnoDB default charset = utf8 comment = '公司信息表';
--客户公司关联表--
create table `member_company`(
    `id` bigint default null comment 'ID',
    `member_id` bigint default null comment '客户ID',
    `company_id` bigint default null comment '公司ID',
    `company_name` varchar(50) default null comment '公司名称',
    `member_name` varchar(30) default null comment '客户名',
) engine = InnoDB default charset = utf8 comment = '公司信息表';
--线索公司关联表--
create table `clue_company`(
    `id` bigint default null comment 'ID',
    `clue_id` bigint default null comment '客户ID',
    `company_id` bigint default null comment '公司ID',
) engine = InnoDB default charset = utf8 comment = '线索公司信息表';
--渠道表--
create table `channel`(
    `id` bigint default null comment 'ID',
    `name` varchar(20) default null comment '渠道名称',
    `channel_type` varchar(15) default null comment '渠道类型：合同流水、流水分成',
    `info` varchar(100) default null comment '渠道简介',
) engine = InnoDB default charset = utf8 comment = '渠道信息表';
--网红代理表--
create table `celebrity_agent`(
    `id` bigint default null comment 'ID',
    `name` varchar(20) default null comment '渠道名称',
) engine = InnoDB default charset = utf8 comment = '网红代理表';
--项目表--
create table `celebrity_agent`(
    `id` bigint default null comment 'ID',
    `countryName` varchar(30) default null comment '国家/地区',
    `period_name` varchar(8) default null comment '期数',
    `product_name` varchar(30) default null comment '产品名',
    `product_type` varchar(30) default null comment '产品类型',
    `product_url` varchar(130) default null comment '产品链接',
    `price` int default null comment '产品单价',
    `put_money` varchar(30) default null comment '预算金额（美元）',
    `grade` varchar(2) default null comment '等级',
    `intention` varchar(10) default null comment '合作意向',
    `priority` varchar(5) default null comment '项目优先级',
    `advertise_time` varchar(5) default null comment '广告发布时间',
    `influ_num` int default null comment '需要的博主数量',
    `reference_link` varchar(150) default null comment '参考链接',
    `reference_document` varchar(150) default null comment '参考文件链接',
) engine = InnoDB default charset = utf8 comment = '项目表';