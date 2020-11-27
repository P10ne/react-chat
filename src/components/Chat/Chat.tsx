import React, {FC, MutableRefObject, useEffect, useRef} from "react";
import {block} from 'bem-cn';
import './Chat.scss';
import Message from "../Message";
import {MessageStatus} from "../../redux/store/messages/types/MessageStatus";
import {useSelector} from "react-redux";
import {messagesSelector} from "../../redux/store/messages/selectors";
import {MessageContent} from "../../redux/store/messages/types/Message";
import {profileDataSelector} from "../../redux/store/profile/selectors";

type ChatProps = {};
type PreparedMessage = {
  type: 'message'
  content: MessageContent;
  isOwn: boolean;
  createdAt: string;
  status: MessageStatus;
}

const cn = block('Chat');

const Chat: FC<ChatProps> = () => {
  const messages = useSelector(messagesSelector);
  const profileData = useSelector(profileDataSelector);
  const preparedMessages: Array<PreparedMessage> = messages.map(message => {
    return {
      status: message.status,
      type: message.type,
      content: message.content,
      createdAt: message.createdAt,
      isOwn: message.user.id === profileData?.id
    }
  });

  return (
    <section className={cn()}>
      {preparedMessages.map(message =>
        <Message
          content={message.content}
          date={message.createdAt}
          status={message.status}
          isOwn={message.isOwn}
          type={message.type}
        />
      )}
    </section>
  );
};

export default Chat;
