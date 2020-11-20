import React, {FC} from "react";
import {block} from 'bem-cn';

import './Message.scss';
import {MessageStatus} from "../../redux/store/messages/types/MessageStatus";

const cn = block('Message');
type MessageProps = {
  text: string;
  date: string;
  status: MessageStatus;
};

const Message: FC<MessageProps> = ({text}) => {
  return (
    <span className={cn()}>
      {text}
    </span>
  )
};

export default Message;
