import React, {FC} from "react";
import {Row, Col, Card, Input, Button} from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons';
import {block} from 'bem-cn';
import Layout from "../../components/Layout/Layout";
import './Main.scss';
import Chat from "../../components/Chat";
import ChatSubheader from "../../components/ChatSubheader";
import UsersList from "../../components/UsersList";
import MessageInput from "../../components/MessageInput";

type MainPageProps = {};

const cn = block('MainPage');

const MainPage: FC<MainPageProps> = () => {
  return (
    <Layout>
      <Card>
        <Row gutter={[30, 5]}>
          <Col span={8}>
            <Row>
              <Col flex='auto'>
                <div className={cn('col-header')}>
                  <Input.Search allowClear={true} style={{width: '100%'}} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col flex='auto'>
                <UsersList/>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row>
              <Col flex='auto'>
                <div className={cn('col-header')}>
                  <ChatSubheader title='Заголовок' subTitle='Подзаголовок'/>
                </div>
              </Col>
            </Row>
            <Row gutter={[0, 15]}>
              <Col flex='auto'>
                <Chat />
              </Col>
            </Row>
            <Row gutter={[10, 15]}>
              <Col flex='auto'>
                <MessageInput/>
              </Col>
              <Col flex='none'>
                <Button type='primary' icon={<ArrowRightOutlined/>} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Layout>
  )
};

export default MainPage;
