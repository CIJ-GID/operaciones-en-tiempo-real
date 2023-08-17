import { createSlice } from "@reduxjs/toolkit";
import { encryptKey } from "../../helpers";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: "",
  },
  reducers: {
    validateUser: (state, action) => {
      const { password, adminOrInvite } = action.payload;
      const landingPass =
        adminOrInvite === "admin"
          ? import.meta.env.VITE_LANDING_ADMIN_PASSWORD
          : import.meta.env.VITE_LANDING_INVITE_PASSWORD;

      const coincidence = password.toUpperCase() === landingPass;

      if (coincidence) {
        localStorage.setItem(
          "userHash",
          JSON.stringify(encryptKey(password, import.meta.env.VITE_HASH_PASSWORD))
        );
        state.user = encryptKey(password, import.meta.env.VITE_HASH_PASSWORD);
      } else {
        alert("Contraseña incorrecta!");
      }
    },
  },
});

export const loginReducer = loginSlice.reducer;
export const { validateUser } = loginSlice.actions;
