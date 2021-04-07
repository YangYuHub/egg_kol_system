import React from 'react';
import { Form, Input, Modal, Select } from 'antd';

type Iprop = {
  isModalVisible:boolean,
  addCustom:(falg:boolean) => void
}

const AddModal: React.FC<Iprop> = (props) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };

  const handleOk = () => {
    // debugger
    props.addCustom(false)
  };

  const handleCancel = () => {
    props.addCustom(false)
  };

  return (
    <Modal title="添加客户" visible={props.isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form
        {...layout}
        form={form}
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: '请输入名字!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="手机号"
          name="username"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="微信"
          name="username"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="行业"
          name="username"
        >
          <Select> </Select>
        </Form.Item>
        <Form.Item
          label="公司名"
          name="username"
          rules={[{ required: true, message: '请输入公司名!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="关联渠道"
          name="username"
        >
          <Select> </Select>
        </Form.Item>
        <Form.Item
          label="简介"
          name="username"
        >
          <TextArea/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddModal
