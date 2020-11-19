import React, {FC} from "react";
import Textarea from "../Textarea";

type MessageInputProps = {};

const MessageInput: FC<MessageInputProps> = () => {
  return (
    <Textarea
      autoSize={{ minRows: 1, maxRows: 3 }}
    />
  )
};

export default MessageInput;
