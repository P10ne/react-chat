import React, {FC, useEffect, useLayoutEffect, useRef} from "react";
import {Skeleton} from 'antd';
import {block} from 'bem-cn';
import './Chat.scss';
import Message from "../Message";
import {useDispatch, useSelector} from "react-redux";
import {messagesSelector} from "../../redux/store/messages/selectors";
import {MessageContent} from "../../redux/store/messages/types/Message";
import {profileDataSelector} from "../../redux/store/profile/selectors";
import {MessageStatusProp} from "../Message/Message";
import {getUnreadOtherPeopleMessages} from "../../redux/utils/getUnreadOtherPeopleMessages";
import {readMessages} from "../../redux/store/socket/actions";
import {activeChatSelector} from "../../redux/store/chats/selectors";
import {resetUnreadCount} from "../../redux/store/chats/actions";

type ChatProps = {};
type PreparedMessage = {
  id: number;
  type: 'message'
  content: MessageContent;
  isOwn: boolean;
  createdAt: string;
  status: MessageStatusProp;
}

const cn = block('Chat');

const Chat: FC<ChatProps> = () => {
  const {data, loading, error} = useSelector(messagesSelector);
  const profileData = useSelector(profileDataSelector);
  const activeChat = useSelector(activeChatSelector);
  const ref = useRef(null);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (ref && ref.current && data && data.length > 0) {
      // @ts-ignore
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.length > 0 && profileData && activeChat) {
      const unreadMessages = getUnreadOtherPeopleMessages(data, profileData.id);
      if (unreadMessages) {
        dispatch(readMessages({
          chatId: activeChat.id,
          messages: unreadMessages
        }));
        dispatch(resetUnreadCount({
          chatId: activeChat.id
        }));
      }
    }
  }, [data, profileData, activeChat, dispatch]);

  const preparedMessages: Array<PreparedMessage> = data.map(message => {
    return {
      //todo message id
      id: message.id || 0,
      status: (():MessageStatusProp => {
                  if (message.status.sending) return "sending";
                  if (message.status.sent) return "sent";
                  if (message.status.read) return "read";
                  return "read";
                })(),
      type: message.type,
      content: message.content,
      createdAt: message.createdAt,
      isOwn: message.user.id === profileData?.id
    }
  });

  const messagesNode =
    preparedMessages.map(message =>
      <Message
        content={message.content}
        date={message.createdAt}
        status={message.status}
        isOwn={message.isOwn}
        type={message.type}
        key={message.id}
      />
    );

  const loadingNode =
    <>
      {new Array(5).fill(0).map(item => <Skeleton active paragraph={{rows: 1, width: 100}} />)}
    </>;

  const errorNode = <p>Ошибка</p>;

  return (
    <section
      className={cn()}
      ref={ref}
    >
      {
        !loading && data
          ? messagesNode
          : !loading && error
          ? errorNode
          : loadingNode
      }
    </section>
  );
};

export default Chat;
