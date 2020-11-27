import React, {FC} from "react";
import {CheckOutlined, CheckCircleOutlined, FieldTimeOutlined} from "@ant-design/icons";
import {block} from 'bem-cn';

import './Message.scss';
import {MessageStatus} from "../../redux/store/messages/types/MessageStatus";
import {MessageContent, MessageType} from "../../redux/store/messages/types/Message";
import TextMessage from "./content/TextMessage/TextMessage";

const cn = block('Message');
type MessageProps = {
  content: MessageContent;
  date: string;
  status: MessageStatus;
  isOwn: boolean;
  type: MessageType
};

const Message: FC<MessageProps> = ({content, status, date, isOwn, type}) => {
  return (
    <div className={cn( {own: isOwn})}>
      <span className={cn('content')}>
        {type === "message" &&
          <TextMessage text={content.text}/>
        }
        <div className={cn('metainfo')}>
          <small className={cn('date')}>{date}</small>
          {
            isOwn &&
              <span className={cn('status', {value: status})}>
                {status === "sent" && <CheckOutlined />}
                {status === "received" && <CheckCircleOutlined />}
                {status === "read" && <CheckCircleOutlined/>}
                {status === "sending" && <FieldTimeOutlined />}
              </span>
          }
        </div>
      </span>
    </div>
  )
};

export default Message;
