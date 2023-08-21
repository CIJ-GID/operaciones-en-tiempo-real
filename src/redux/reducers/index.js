import { updateData } from "./dataSlice.js";
import { validateUser } from "./loginSlice.js";
import { updateOperation } from "./operationSlice.js";

export const actionsLogin = {
  validateUser,
};
export const actionsData = {
  updateData,
};

export const actionsOperation = {
  updateOperation,
};

export { loginReducer } from "./loginSlice.js";
export { dataReducer } from "./dataSlice.js";
export { operationReducer } from "./operationSlice.js";
