import { createSlice } from "@reduxjs/toolkit";
import { encryptKey } from "../../helpers";

const loginSlice = createSlice({
  name: "user",
  initialState: {
    type: "",
    hash: "",
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
          "user",
          JSON.stringify({
            hash: encryptKey(password, import.meta.env.VITE_HASH_PASSWORD),
            type: adminOrInvite,
          })
        );
        state.hash = encryptKey(password, import.meta.env.VITE_HASH_PASSWORD);
        state.type = adminOrInvite;
      } else {
        alert("Contraseña incorrecta!");
      }
    },
  },
});

export const loginReducer = loginSlice.reducer;
export const { validateUser } = loginSlice.actions;
