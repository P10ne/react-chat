import {MessageStatus} from "./MessageStatus";

export interface Message {
  type: 'message';
  content: string;
  datetime: string;
  status: MessageStatus;
}
