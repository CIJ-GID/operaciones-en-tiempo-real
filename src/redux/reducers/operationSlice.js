import { createSlice } from "@reduxjs/toolkit";

const operationSlice = createSlice({
  name: "operation",
  initialState: {
    nombre: "",
    collectionName: "",
    operacionesTotales: "",
    fuerzasIntervenidas: "",
    sospechosos: "",
    zonasAfectadas: "",
  },
  reducers: {
    updateOperation: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const operationReducer = operationSlice.reducer;
export const { updateOperation } = operationSlice.actions;
