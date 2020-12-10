export type Chat = {
  id: number;
  name: string;
  members: Array<{
    id: number;
    login: string;
  }>,
  unreadMessagesCount: number;
}
