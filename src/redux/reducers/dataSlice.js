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
      let res = {
        //* Estado inicial
        porcentajeObjetivosCompletos: 0,
        cantDetenidos: 0,
        celularesSecuestrados: 0,
        dispositivosDeAlm: 0,
        dispositivosElectronicos: 0,
        elementosNoDigitales: 0,
        menores: 0,
        notebooksSecuestradas: 0,
        pcsSecuestradas: 0,
        tabletsSecuestradas: 0,
        triages: 0,
      };

      let cantObj = Number(docs.length); //* Saco cantidad de objetivos
      let ObjetivosAllanados = docs.filter(
        (doc) => doc.objetivo_allanado.toUpperCase() === "SI"
      ); //* Objetivos allanados
      res.porcentajeObjetivosCompletos = Math.floor(
        (Number(ObjetivosAllanados.length) * 100) / cantObj
      ); //* Saco porcentaje de objetivos
      docs.filter((doc) => {
        const {
          cantidad_detenidos,
          celulares_secuestrados,
          dispositivos_de_almacenamiento,
          dispositivos_electronicos,
          elementos_no_digitales,
          menores_de_edad,
          notebooks_secuestradas,
          pcs_secuestradas,
          tablets_secuestradas,
          triage,
        } = doc; //* Destructuring
        res.cantDetenidos += cantidad_detenidos;
        res.celularesSecuestrados += celulares_secuestrados;
        res.dispositivosDeAlm += dispositivos_de_almacenamiento;
        res.dispositivosElectronicos += dispositivos_electronicos;
        res.elementosNoDigitales += elementos_no_digitales;
        res.menores += menores_de_edad;
        res.notebooksSecuestradas += notebooks_secuestradas;
        res.pcsSecuestradas += pcs_secuestradas;
        res.tabletsSecuestradas += tablets_secuestradas;
        triage === "SI" ? res.triages++ : null;
      }); //* Saco cantidades
      return {
        ...state,
        cantObj: cantObj,
        ...res,
      };
    },
  },
});

export const dataReducer = dataSlice.reducer;
export const { updateData } = dataSlice.actions;
