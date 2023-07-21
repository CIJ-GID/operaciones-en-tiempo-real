// Función para cifrar la clave
function encryptKey(key, secret) {
  const encrypted = CryptoJS.AES.encrypt(key, secret).toString();
  return encrypted;
}

// Función para descifrar la clave
function decryptKey(encryptedKey, secret) {
  const decrypted = CryptoJS.AES.decrypt(encryptedKey, secret).toString(
    CryptoJS.enc.Utf8
  );
  return decrypted;
}

export const handleCheckUser = () => {
  const userHash = JSON.parse(localStorage.getItem("userHash"));

  if (userHash) {
    const decrypted = decryptKey(userHash, import.meta.env.VITE_HASH_PASSWORD);

    if (decrypted === import.meta.env.VITE_LANDING_PASSWORD) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const handleLogin = (password) => {
  const coincidence = password === import.meta.env.VITE_LANDING_PASSWORD;
  if (coincidence) {
    localStorage.clear();
    localStorage.setItem(
      "userHash",
      JSON.stringify(encryptKey(password, import.meta.env.VITE_HASH_PASSWORD))
    );
  }
};
