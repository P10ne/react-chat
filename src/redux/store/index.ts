import {combineReducers} from "redux";
import messages from "./messages/reducer";
import chats from './chats/reducer';

export const rootReducer = combineReducers({
  messages,
  chats
});

export type RootState = ReturnType<typeof rootReducer>;
