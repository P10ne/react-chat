import React, {FC} from "react";
import {PageHeader as AntdPageHeader} from 'antd';
import {block} from 'bem-cn';
import './ChatSubheader.scss';

type ChatSubheaderProps = {
  title: string;
  subTitle: string;
};
const cn = block('ChatSubheader');

const ChatSubheader: FC<ChatSubheaderProps> = (props) => {
  return (
    <AntdPageHeader
      className={cn()}
      {...props}
    />
  )
};

export default ChatSubheader;
