import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    porcentajeObjetivosCompletos: 0,
    cantObj: 0,
    menores: 0,
    cantDetenidos: 0,
    triages: 0,
    celularesSecuestrados: 0,
    tabletsSecuestradas: 0,
    notebooksSecuestradas: 0,
    pcsSecuestradas: 0,
    dispositivosElectronicos: 0,
    dispositivosDeAlm: 0,
    elementosNoDigitales: 0,
  },
  reducers: {
    updateData: (state, action) => {
      const docs = action.payload;
      let cantObj = docs.length; //!?? -3 porque empieza de 0, tiene el doc de datos generales y el de provincias
      let objetivosAllanados = docs.filter((doc) => doc.objetivo_allanado === "SI");
      state.porcentajeObjetivosCompletos = Math.floor(
        (Number(objetivosAllanados.length) * 100) / cantObj
      );

      state.cantObj = cantObj;

      docs.forEach((doc) => {
        state.cantDetenidos += doc.cantidad_detenidos || 0;
        state.celularesSecuestrados += doc.celulares_secuestrados || 0;
        state.dispositivosDeAlm += doc.dispositivos_de_almacenamiento || 0;
        state.dispositivosElectronicos += doc.dispositivos_electronicos || 0;
        state.elementosNoDigitales += doc.elementos_no_digitales || 0;
        state.menores += doc.menores_de_edad || 0;
        state.notebooksSecuestradas += doc.notebooks_secuestradas || 0;
        state.pcsSecuestradas += doc.pcs_secuestradas || 0;
        state.tabletsSecuestradas += doc.tablets_secuestradas || 0;
        state.triages += doc.triage === "SI" ? 1 : 0;
      });
    },
  },
});

export const dataReducer = dataSlice.reducer;
export const { updateData } = dataSlice.actions;
