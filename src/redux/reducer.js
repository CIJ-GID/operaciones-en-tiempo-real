import { encryptKey } from "../helpers";
import { UPDATE_DATA, LOGIN } from "./actions";

let initialState = {
  data: {},
  user: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      const coincidence = action.payload === import.meta.env.VITE_LANDING_PASSWORD;
      if (coincidence) {
        return {
          ...state,
          user: encryptKey(action.payload, import.meta.env.VITE_HASH_PASSWORD),
        };
      }
    }
    case UPDATE_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
