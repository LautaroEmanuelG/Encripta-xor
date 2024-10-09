# 🔐 Encrypt-Xor

**Encrypt-Xor** es una pequeña librería de encriptación basada en el operador XOR y codificación Base64. Utiliza encriptación simétrica y está diseñada para proyectos simples que requieran encriptación y desencriptación rápida y fácil con una clave compartida. Esta librería está escrita en TypeScript y puede ser utilizada en cualquier proyecto JavaScript o TypeScript.

## 📦 Instalación

Puedes instalar la librería a través de npm:

```bash
npm install encrypt-xor
```

## 🚀 Uso

Aquí tienes un ejemplo básico de cómo usar Encrypt-Xor para encriptar y desencriptar mensajes utilizando una clave compartida:

```typescript
Copiar código
// Importar la clase
import Encriptxor from 'encrypt-xor';

// Definir una clave compartida
const key = 'PalabraClave';

// Crear una instancia de la clase Encriptxor
const encriptador = new Encriptxor();

// Texto a encriptar
const mensaje = 'Mensaje que deseo encriptar';

// Encriptar el mensaje
const mensajeEncriptado = encriptador.encriptar(mensaje, key);
console.log('Mensaje encriptado:', mensajeEncriptado);

// Desencriptar el mensaje
const mensajeOriginal = encriptador.desencriptar(mensajeEncriptado, key);
console.log('Mensaje desencriptado:', mensajeOriginal);
```

## ✨ Características

- 🔑 Encriptación simétrica: El mismo algoritmo y clave son usados para encriptar y desencriptar.
- ⚡ Operador XOR: Utiliza el operador lógico XOR para ofuscar el texto con la clave.
- 🗝️ Codificación Base64: El texto encriptado se convierte a Base64 para que sea legible y portable.
- 🔄 Claves dinámicas: La clave puede tener cualquier longitud y se adapta automáticamente al tamaño del mensaje.

## ⚙️ Cómo funciona

El proceso de encriptación y desencriptación se basa en aplicar una operación XOR entre los caracteres del mensaje y los caracteres de la clave. El resultado se convierte en una cadena en Base64 para facilitar su almacenamiento o transmisión.

## ⚠️ Limitaciones

- 🛡️ Seguridad: Esta encriptación XOR es una solución sencilla y no está diseñada para proteger datos sensibles en un entorno de producción.
- 🔐 Clave compartida: La clave de encriptación debe ser conocida tanto por quien encripta como por quien desencripta.
