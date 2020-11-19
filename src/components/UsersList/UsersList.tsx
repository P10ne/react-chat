import React, {FC} from "react";
import {block} from 'bem-cn';
import List from "../List";
import UsersListItem from "../UsersListItem";
import './UsersList.scss';

const cn = block('UsersList');
type UsersListProps = {};
const UsersList: FC<UsersListProps> = () => {
  return (
    <List
      className={cn()}
      renderItem={item => (
        <UsersListItem name={item.name} avatarSrc='' meta={item.meta} />
      )}
      dataSource={[{id: '1', name: 'some name1', meta: 'some meta 1'}, {id: '2', name: 'some name2', meta: 'some meta 2'}]}
    />
  )
};

export default UsersList;
