import {RootState} from "../index";
import {Chat} from "./types/Chat";
import {Chats} from "./types/Chats";

export const chatsSelector = (state: RootState): Chats => state.chats.data;
export const activeChatSelector = (state: RootState): Chat | null => state.chats.active;
