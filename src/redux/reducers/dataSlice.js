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
    tableData: [],
    tableData2: {},
  },
  reducers: {
    updateData: (state, action) => {
      const docs = action.payload;

      const paises = docs.filter((d) => d.CANT_OBJETIVOS);
      const objetivos = docs.filter((d) => d.GUID);

      const paisesArray = [];

      paises.map((p) => {
        paisesArray.push({
          tipo: p.OBJETIVO,
          cant: p.CANT_OBJETIVOS,
          cant2: p.cantidad_detenidos,
        });
      });

      // Group data by province and calculate sums
      const provinceData = {};

      objetivos.forEach((obj) => {
        const { PROVINCIA, cantidad_detenidos } = obj;

        if (!provinceData[PROVINCIA]) {
          provinceData[PROVINCIA] = {
            tipo: PROVINCIA,
            cant: 0,
            cant2: 0,
          };
        }

        provinceData[PROVINCIA].cant++;
        provinceData[PROVINCIA].cant2 += cantidad_detenidos;
      });

      let res = {
        //* Estado inicial
        cantObj: 0,
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

      const provinceArray = Object.values(provinceData);
      const tableRes = paisesArray.concat(provinceArray);

      let cantObj = Number(docs.length); //* Saco cantidad de objetivos
      res.cantObj = cantObj;
      let ObjetivosAllanados = docs.filter(
        (doc) => doc.objetivo_allanado.toUpperCase() === "SI"
      ); //* Objetivos allanados
      let porcentajeObjetivosCompletos = Math.floor(
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
        tableData2: res,
        tableData: tableRes,
        porcentajeObjetivosCompletos: porcentajeObjetivosCompletos,
      };
    },
  },
});

export const dataReducer = dataSlice.reducer;
export const { updateData } = dataSlice.actions;
