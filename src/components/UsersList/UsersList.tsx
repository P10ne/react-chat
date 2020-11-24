import React, {FC, SyntheticEvent} from "react";
import {block} from 'bem-cn';
import List from "../List";
import UsersListItem from "../UsersListItem";
import './UsersList.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Chat} from "../../redux/store/chats/types/Chat";
import {setSelectedChat} from "../../redux/store/chats/actions";
import {activeChatSelector, chatsSelector} from "../../redux/store/chats/selectors";
import {fetchMessages} from "../../redux/store/messages/actions";

const cn = block('UsersList');
type UsersListProps = {};

const UsersList: FC<UsersListProps> = () => {
  const dispatch = useDispatch();
  const chats = useSelector(chatsSelector);
  const activeChat = useSelector(activeChatSelector);

  const selectChat = (chat: Chat) => {
    dispatch(setSelectedChat(chat));
    dispatch(fetchMessages({chatId: chat.id}));
  };

  return (
    <List
      className={cn()}
      renderItem={(item: Chat) => (
        <UsersListItem
          name={item.name}
          selected={activeChat?.id === item.id}
          onClick={() => selectChat(item)} />
      )}
      dataSource={chats}
    />
  )
};

export default UsersList;
