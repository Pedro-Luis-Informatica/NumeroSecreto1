//SCOPE LOCAL
const nombreApellido = () => {
  const nombre2 = "Juan";
  const apellido2 = "Perez";
  console.log(`Nombre: ${nombre2} Apellido: ${apellido2}`);
};

nombreApellido();

//SCOPE GLOBAL
let nombre = "Juan";
let apellido = "Perez";
const frutas = ["Manzana", "Pera", "Banana"];
const saludar = () => {
  console.log(`Hola ${nombre} ${apellido}`);
};
console.log(frutas);
console.log(nombre);
