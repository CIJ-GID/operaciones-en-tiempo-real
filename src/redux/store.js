import { configureStore } from "@reduxjs/toolkit";
import { dataReducer, loginReducer, operationReducer } from "./reducers";

const store = configureStore({
  reducer: {
    user: loginReducer,
    data: dataReducer,
    operation: operationReducer,
  },
});

export default store;
