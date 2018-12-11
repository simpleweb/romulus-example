// @flow
import { APP_INSTALLED, type AppInstalled } from "Romulus/App/Actions/App";

type State = {
  +installed: boolean,
};

type Action = AppInstalled;

const initialState: State = {
  installed: false,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case APP_INSTALLED:
      return {
        ...state,
        installed: true,
      };

    default:
      return state;
  }
};

export default reducer;
