import * as reducer from "../../store/reducer/chats";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useChats = () => {
    
    const actions = useActions(reducer);
  
  return {

    createChatApi : reducer.createChatApi
    
  };
};

export default useChats;
