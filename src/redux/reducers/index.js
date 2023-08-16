import { updateData } from "./dataSlice.js";
import { validateUser } from "./loginSlice.js";

export const actionsLogin = {
  validateUser,
};
export const actionsData = {
  updateData,
};

export { loginReducer } from "./loginSlice.js";
export { dataReducer } from "./dataSlice.js";
