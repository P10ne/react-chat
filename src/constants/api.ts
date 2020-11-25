const ROOT = '/api';

const USERS = `${ROOT}/users`;
const PROFILE = `${USERS}/me`;
const CHATS = `${ROOT}/chats`;
const MESSAGES = `${ROOT}/messages/chatId=:chatId`;

const API = {
  PROFILE,
  CHATS,
  MESSAGES
};

export default API;
