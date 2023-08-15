import { createSlice } from "@reduxjs/toolkit";
import { encryptKey } from "../../helpers";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: "",
  },
  reducers: {
    validateUser: (state, action) => {
      const coincidence = action.payload === import.meta.env.VITE_LANDING_PASSWORD;
      if (coincidence) {
        localStorage.setItem(
          "userHash",
          JSON.stringify(encryptKey(action.payload, import.meta.env.VITE_HASH_PASSWORD))
        );
        state.user = encryptKey(action.payload, import.meta.env.VITE_HASH_PASSWORD);
      }
    },
  },
});

export const loginReducer = loginSlice.reducer;
export const { validateUser } = loginSlice.actions;
