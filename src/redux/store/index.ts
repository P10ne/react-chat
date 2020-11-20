import {combineReducers} from "redux";
import messages from "./messages/reducer";

export const rootReducer = combineReducers({
  messages
});

export type RootState = ReturnType<typeof rootReducer>;
