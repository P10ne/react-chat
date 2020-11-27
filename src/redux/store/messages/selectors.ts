import {RootState} from "../index";
import {Messages} from "./types/Messages";

export const messagesSelector = (state: RootState): Messages => state.messages.data;
