import { createSlice } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../database/db";

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
    loadOperation: async (state, action) => {
      await setDoc(doc(db, action.payload.collectionName, "GeneralInfo"), action.payload);
      Object.assign(state, action.payload);
    },
  },
});

export const operationReducer = operationSlice.reducer;
export const { updateOperation, loadOperation } = operationSlice.actions;
