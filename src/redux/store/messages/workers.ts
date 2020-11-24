import {FetchMessagesAction} from "./types/actions";
import {RequestMethod, sendRequest} from "../../utils/request";
import API from "../../../constants/api";
import {setData, setError, startLoading, stopLoading} from "./actions";

export function* getMessages({payload: {chatId}}: FetchMessagesAction) {
  yield sendRequest(
    {
      method: RequestMethod.GET,
      url: ''
    },
    {
      startFetchingAction: startLoading,
      stopFetchingAction: stopLoading,
      setDataAction: setData,
      setFetchingErrorAction: setError
  });
}
