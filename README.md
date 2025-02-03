# Aprendiendo JavaScript

Bienvenido al repositorio **Aprendiendo JavaScript**. Aquí encontrarás conceptos fundamentales de JavaScript con ejemplos prácticos que te ayudarán a mejorar tus habilidades en programación web.

## Contenido del Repositorio

Este repositorio está estructurado en diferentes temas clave de JavaScript:

### 1. Variables y Tipos de Datos

Las variables almacenan datos. Se pueden declarar con var, let o const.

```js
var nombre = "Pedro"; // String
let cedula = "123456789"; // String
let edad = 25; // Number
let sueldo = 2500.0; // Number
let hijos = false; // Boolean

const PI = 3.1416; // constante, no cambiará su valor
```

### 2. Tipos de datos en JavaScript:

```
String (texto)     "Hola, mundo"
Number (número)    42, 3.14
Boolean (booleano) true, false
Array (arreglo)    [1, 2, 3, 4]
Object (objeto)    { nombre: "Pedro", edad: 25 }
```

### 3. Operadores Aritméticos

Los operadores permiten realizar operaciones con variables y valores.

```js
let suma = 7 + 8;
let resta = 20 - 4;
let multiplicacion = 9 * 1;
let division = 25 / 5;
let modulo = 30 % 3;
let exponente = 5 ** 2;
console.log(suma, resta, multiplicacion, division, modulo, exponente);
```

### 4. Entrada y Salida de Datos

```js
let saludo = "hola ";
let persona = prompt("Ingresa tu nombre: ");
let mensaje = saludo + persona;
console.log(mensaje);

// alert(mensaje); // muestra un mensaje en la pantalla
alert("Mañana hay examen de bases de datos");
```

### 5. Condicionales

Las estructuras de control permiten ejecutar código según condiciones

```js
let nombre = prompt("Ingresa tu nombre: ");
let edadNueva = prompt("Ingresa tu edad: ");
if (edadNueva > 18) {
  console.log(nombre, "Eres mayor de edad");
} else if (edadNueva < 18) {
  console.log(nombre + " Eres menor de edad");
} else {
  console.log(nombre, "Tienes 18 años");
}
```
