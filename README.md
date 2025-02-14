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

### 6. Arreglos y Métodos más Usados

Un **arreglo** es una estructura de datos que permite almacenar múltiples valores en una sola variable.

```js
let frutas = ["Manzana", "Banana", "Uva", "Naranja"];
console.log(frutas[0]); // Accede al primer elemento "Manzana"
```

#### Métodos más usados en arreglos:

```js
// Agregar elementos al final
frutas.push("Mango");
console.log(frutas); // ["Manzana", "Banana", "Uva", "Naranja", "Mango"]

// Eliminar el último elemento
frutas.pop();
console.log(frutas); // ["Manzana", "Banana", "Uva", "Naranja"]

// Agregar elementos al inicio
frutas.unshift("Fresa");
console.log(frutas); // ["Fresa", "Manzana", "Banana", "Uva", "Naranja"]

// Eliminar el primer elemento
frutas.shift();
console.log(frutas); // ["Manzana", "Banana", "Uva", "Naranja"]

// Encontrar la posición de un elemento
let indice = frutas.indexOf("Uva");
console.log(indice); // 2

// Eliminar un elemento por su índice
frutas.splice(indice, 1);
console.log(frutas); // ["Manzana", "Banana", "Naranja"]

// Copiar una parte del arreglo
let nuevasFrutas = frutas.slice(1, 3);
console.log(nuevasFrutas); // ["Banana", "Naranja"]

// Recorrer un arreglo con forEach
frutas.forEach(fruta => console.log(fruta));

// Transformar elementos con map
let mayusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(mayusculas); // ["MANZANA", "BANANA", "NARANJA"]

// Filtrar elementos
let filtradas = frutas.filter(fruta => fruta.length > 5);
console.log(filtradas); // ["Banana", "Naranja"]

// Verificar si un elemento existe en el arreglo
console.log(frutas.includes("Manzana")); // true
```
