class Encriptxor {
  // Función para encriptar
  encriptar(plainText: string, key: string): string {
    const textChars = plainText.split(''); // Dividimos el texto en caracteres
    const keyChars = key.split(''); // Dividimos la clave en caracteres
    let encryptedText = '';

    for (let i = 0; i < textChars.length; i++) {
      // Aplicamos XOR entre el código de cada carácter del texto y la clave
      const charCode =
        textChars[i].charCodeAt(0) ^
        keyChars[i % keyChars.length].charCodeAt(0);
      encryptedText += String.fromCharCode(charCode); // Convertimos a carácter
    }

    // Retornamos el mensaje encriptado en formato base64 para que sea legible y portable
    return btoa(encryptedText); // Use btoa for base64 encoding
  }

  // Función para desencriptar
  desencriptar(encryptedText: string, key: string): string {
    // Convertimos el texto encriptado desde base64 de vuelta a su forma original
    const encryptedChars = atob(encryptedText).split(''); // Use atob for base64 decoding
    const keyChars = key.split('');
    let decryptedText = '';

    for (let i = 0; i < encryptedChars.length; i++) {
      // Reaplicamos XOR para desencriptar el texto
      const charCode =
        encryptedChars[i].charCodeAt(0) ^
        keyChars[i % keyChars.length].charCodeAt(0);
      decryptedText += String.fromCharCode(charCode);
    }

    return decryptedText;
  }
}

export default Encriptxor;