import React, {FC} from "react";
import {useHistory} from 'react-router-dom';
import {Form, Input, Card, Button} from 'antd';
import ROUTES from "../../constants/routes";

type LoginFormProps = {};

const LoginForm: FC<LoginFormProps> = () => {
  const history = useHistory();

  const onFinish = () => {
    history.replace({pathname: ROUTES.MAIN_PATH})
  };

  return (
    <Card>
      <Form
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        initialValues={{}}
        onFinish={onFinish}
      >
        <Form.Item
          label='Логин:'
          name='login'
          rules={[
            {
              required: true,
              message: 'Обязательное поле'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Пароль:'
          name='password'
          rules={[
            {
              required: true,
              message: 'Обязательное поле'
            }
          ]}
        >
          <Input type='password' />
        </Form.Item>

        <Form.Item wrapperCol={{offset: 8, span: 16}}>
          <Button type='primary' htmlType='submit'>Войти</Button>
        </Form.Item>
      </Form>
    </Card>
  )
};

export default LoginForm;
