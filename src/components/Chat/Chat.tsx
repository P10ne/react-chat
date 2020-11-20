import React, {FC} from "react";
import {block} from 'bem-cn';
import './Chat.scss';
import Message from "../Message";
import {MessageStatus} from "../../redux/store/messages/types/MessageStatus";

type ChatProps = {};
const cn = block('Chat');

const Chat: FC<ChatProps> = () => {
  const datasource: Array<{
    type: 'message'
    content: string;
    isOwn?: boolean;
    date: string;
    status: MessageStatus;
  }> = [
    {
      content: 'message 1',
      date: '13:55',
      status: 'read',
      type: "message"
    },
    {
      content: 'message 2',
      date: '11:55',
      status: 'sent',
      type: "message",
      isOwn: true
    },
    {
      content: 'message 3',
      date: '10:30',
      status: 'received',
      type: "message"
    },
    {
      content: 'message 4',
      date: '10:20',
      status: 'sending',
      type: "message"
    }
  ];
  return (
    <section className={cn()}>
      {datasource?.map(message =>
        <div className={cn('message', {own: message.isOwn})}>
          <Message text={message.content} date={message.date} status={message.status} />
        </div>
      )}
    </section>
  );
};

export default Chat;
