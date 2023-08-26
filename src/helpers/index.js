// Función para cifrar la clave
export function encryptKey(key, secret) {
  const encrypted = CryptoJS.AES.encrypt(key, secret).toString();
  return encrypted;
}

// Función para descifrar la clave
export function decryptKey(encryptedKey, secret) {
  const decrypted = CryptoJS.AES.decrypt(encryptedKey, secret).toString(
    CryptoJS.enc.Utf8
  );
  return decrypted;
}

export const handleCheckUser = (hash, userType) => {
  if (hash) {
    const landingPass =
      userType === "admin"
        ? import.meta.env.VITE_LANDING_ADMIN_PASSWORD
        : import.meta.env.VITE_LANDING_INVITE_PASSWORD;

    const decrypted = decryptKey(hash, import.meta.env.VITE_HASH_PASSWORD);

    if (decrypted.toUpperCase() === landingPass) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export function formatDataToTableData(data) {
  const propertyMappings = {
    cantDetenidos: "Detenidos",
    celularesSecuestrados: "Celulares",
    dispositivosDeAlm: "Disp. de Almacenamiento",
    dispositivosElectronicos: "Disp. Electrónicos",
    elementosNoDigitales: "NO Digitales",
    menores: "Menores",
    notebooksSecuestradas: "Notebooks",
    pcsSecuestradas: "PCs",
    tabletsSecuestradas: "Tablets",
    triages: "Triages",
    cantObj: "ALLANAMIENTOS",
  };

  const outputArray = [];
  let isFirstObject = true;

  for (const key in data) {
    if (key === "porcentajeObjetivosCompletos") {
      continue;
    }

    const mappedKey = propertyMappings[key] || key; // Usar el nombre mapeado o el original
    const newObj = {
      tipo: mappedKey,
      cant:     data[key],
    };

    if (isFirstObject) {
      newObj.color = "text-principalTextColor font-bold";
      isFirstObject = false;
    }

    outputArray.push(newObj);
  }

  return outputArray;
}

export const provincias = [
  { name: "Prov. Buenos Aires", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "CABA", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "Entre Ríos", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "Santa Fe", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "Chubut", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "Córdoba", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "Formosa", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "Salta", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "San Luis", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "Misiones", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "Jujuy", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "Mendoza", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "Chaco", cantObjetivos: 0, cantDetenidos: 0 },
  { name: "San Juan", cantObjetivos: 0, cantDetenidos: 0 },
];
