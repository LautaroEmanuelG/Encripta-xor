var Encriptxor = /** @class */ (function () {
    function Encriptxor() {
    }
    // Función para encriptar
    Encriptxor.prototype.encriptar = function (plainText, key) {
        var textChars = plainText.split(''); // Dividimos el texto en caracteres
        var keyChars = key.split(''); // Dividimos la clave en caracteres
        var encryptedText = '';
        for (var i = 0; i < textChars.length; i++) {
            // Aplicamos XOR entre el código de cada carácter del texto y la clave
            var charCode = textChars[i].charCodeAt(0) ^
                keyChars[i % keyChars.length].charCodeAt(0);
            encryptedText += String.fromCharCode(charCode); // Convertimos a carácter
        }
        // Retornamos el mensaje encriptado en formato base64 para que sea legible y portable
        return Buffer.from(encryptedText).toString('base64');
    };
    // Función para desencriptar
    Encriptxor.prototype.desencriptar = function (encryptedText, key) {
        // Convertimos el texto encriptado desde base64 de vuelta a su forma original
        var encryptedBuffer = Buffer.from(encryptedText, 'base64');
        var encryptedChars = encryptedBuffer.toString().split('');
        var keyChars = key.split('');
        var decryptedText = '';
        for (var i = 0; i < encryptedChars.length; i++) {
            // Reaplicamos XOR para desencriptar el texto
            var charCode = encryptedChars[i].charCodeAt(0) ^
                keyChars[i % keyChars.length].charCodeAt(0);
            decryptedText += String.fromCharCode(charCode);
        }
        return decryptedText;
    };
    return Encriptxor;
}());
// Uso:
var key = 'juan'; // Clave compartida
var encriptador = new Encriptxor();
var mensaje = 'Juan tiene un perro que se llama juan1231 LLLL #$%""###';
var mensajeEncriptado = encriptador.encriptar(mensaje, key);
console.log('Mensaje encriptado:', mensajeEncriptado);
var mensajeOriginal = encriptador.desencriptar(mensajeEncriptado, key);
console.log('Mensaje desencriptado:', mensajeOriginal);
