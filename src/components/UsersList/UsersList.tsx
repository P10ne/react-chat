import React, {FC} from "react";
import {Skeleton} from 'antd';
import {block} from 'bem-cn';
import List from "../List";
import UsersListItem from "../UsersListItem";
import './UsersList.scss';
import {useDispatch, useSelector} from "react-redux";
import {Chat} from "../../redux/store/chats/types/Chat";
import {setSelectedChat} from "../../redux/store/chats/actions";
import {activeChatSelector, chatsSelector} from "../../redux/store/chats/selectors";
import {fetchMessages} from "../../redux/store/messages/actions";

const cn = block('UsersList');
type UsersListProps = {};

const UsersList: FC<UsersListProps> = () => {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(chatsSelector);
  const activeChat = useSelector(activeChatSelector);

  const selectChat = (chat: Chat) => {
    dispatch(setSelectedChat(chat));
    dispatch(fetchMessages({chatId: chat.id}));
  };

  const chatListNode =
    <List
      className={cn()}
      renderItem={(item: Chat) => (
        <UsersListItem
          name={item.name}
          unreadMessagesCount={item.unreadMessagesCount}
          selected={activeChat?.id === item.id}
          onClick={() => selectChat(item)} />
      )}
      dataSource={data}
    />;

  const loadingNode =
    <>
      {new Array(5).fill(0).map(item => <Skeleton active avatar paragraph={{rows: 0}} />)}
    </>;

  const errorNode =
    <p>Ошибка</p>;

  return (
    !loading && data
      ? chatListNode
      : !loading && error
        ? errorNode
        : loadingNode
  );
};

export default UsersList;
