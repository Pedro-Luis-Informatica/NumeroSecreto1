// los arreglos
let frutas = ["manzana", "pera", "uva", "sandía", "kiwi"];
let vegetales = ["zanahoria", "papa", "cebolla", "lechuga", "tomate"];
let verduras = ["espinaca", "acelga", "berenjena", "brócoli", "coliflor"];

let alimentos = [frutas, vegetales, verduras];
console.log(alimentos);
// console.log(frutas);
// console.log(vegetales);
// console.log(verduras);

// console.log(vegetales[3]);
console.log(alimentos[2][3]); // mostrar un elemento dentro de un arreglo de otro arreglo
console.log(vegetales.length); // mostrar el numero de elementos
console.log(verduras[4]); // mostrar elemento de la posicion 4

// if (vegetales[1] == "papa") {
//   console.log("este elemento existe");
// } else {
//   console.log("este elemento no existe");
// }
console.log(vegetales);
// vegetales.push("ARROZ");
// console.log(vegetales);
frutas.push("peraaa");
console.log(frutas);

let varible = prompt("ingrese un elemento");
if (vegetales.includes(varible)) {
  console.log("este elemento existe");
} else {
  vegetales.push(varible);
  console.log(vegetales);
}

// metodos de los arreglos

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// metodos para agregar elementos a un arreglo
//metodo push agregar al final
numeros.push(11);
// metodo unshift agregar al inicio
numeros.unshift(0);

// metodos para eliminar elementos de un arreglo
// metodo para eliminar el ultimo elemento de un arreglo
numeros.pop();
// metodo para eliminar el primer elemento de un arreglo
numeros.shift();

// metodo splice
// splice(posicion, cantidad de elementos a eliminar,elementos a agregar)
numeros.splice(3, 2);
numeros.splice(3, 0, 4, 5);

// metodo reverse
numeros.reverse(); // revierte el arreglo de forma permanente

// metodo sort, ordena el arreglo de forma permanente
numeros.sort();

// metodo fill, para llenar un arreglo con un valor
// array.fill(valor, inicio, fin);
// valor → El valor con el que se rellenará el array.
//inicio (opcional) → Índice desde donde comienza el relleno
//fin (opcional) → Índice hasta donde se aplicará el relleno
// numeros.fill("X", 1, 4);

// metodo map
// crea un nuevo arreglo con los resultados de la llamada a la
// función indicada aplicados a cada uno de sus elementos.
const numerosDoble = numeros.map((multi) => multi * 2);
console.log("arreglo 1", numeros);
console.log("arreglo 2", numerosDoble);
