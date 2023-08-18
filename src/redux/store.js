import { configureStore } from "@reduxjs/toolkit";
import { dataReducer, loginReducer } from "./reducers";

const store = configureStore({
  reducer: {
    user: loginReducer,
    data: dataReducer,
  },
});

export default store;
