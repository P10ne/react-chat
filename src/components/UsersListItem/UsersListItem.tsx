import React, {FC} from "react";
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {block} from 'bem-cn';
import './UsersListItem.scss';

type UsersListItemProps = {
  avatarSrc?: string;
  name: string;
  meta?: string;
  children?: never;
};
const cn = block('UsersListItem');

const UsersListItem: FC<UsersListItemProps> = ({name, meta}) => {
  return (
    <div className={cn()}>
      <div className={cn('avatar')}>
        <Avatar icon={<UserOutlined/>} />
      </div>
      <div className={cn('info')}>
        <span className={cn('name')}>
          {name}
        </span>
        <span className={cn('meta')}>
          {meta}
        </span>
      </div>
    </div>
  )
};

export default UsersListItem;
