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

export const handleCheckUser = (hash) => {
  if (hash) {
    const userType = localStorage.getItem("userType");
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
