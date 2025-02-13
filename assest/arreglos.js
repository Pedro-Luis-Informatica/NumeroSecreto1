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
