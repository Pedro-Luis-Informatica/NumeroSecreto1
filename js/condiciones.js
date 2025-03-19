// condiciones
let nombre = prompt("Ingresa tu nombre: ");
let edadNueva = prompt("Ingresa tu edad: ");
if (edadNueva > 18) {
  console.log(nombre, "Eres mayor de edad");
} else if (edadNueva < 18) {
  console.log(nombre + " Eres menor de edad");
} else {
  console.log(nombre, "Tienes 18 años");
}
