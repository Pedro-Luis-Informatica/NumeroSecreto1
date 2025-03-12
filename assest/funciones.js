// funcion para saludar sin parametros
function saludar() {
  alert("Hola a todos :)");
}
// saludar();

const saludar2 = () => {
  alert("Hola a todos desde arrow function :)");
};
// saludar2();

// funcion con un parametro
function saludarConNombre(nombre) {
  alert(`Hola ${nombre} :)`); // template string
  console.log("hola", nombre); // concatenacion
  console.log("hola" + nombre); // concatenacion
}
// saludarConNombre("Miguel");

// funcion con dos parametros
function saludarConApellido(nombre, apellido) {
  alert(`Hola ${nombre} ${apellido} :)`);
  console.log("hola", nombre, apellido);
  console.log("hola" + nombre + apellido);
}

// saludarConApellido("Argenis", "Linares");

// funcion para saludar y ver series
let serie = prompt("¿Cuál es tu serie favorita?");
let nombre = prompt("¿Cuál es tu nombre?");
let apellido = prompt("¿Cuál es tu apellido?");

const serieFavorita = (nombre, apellido, serie) => {
  alert(`Hola ${nombre} ${apellido}, tu serie favorita es ${serie}`);
};

// serieFavorita(nombre, apellido, serie);

//funciones con valores de retorno
function sumar(num1, num2) {
  return num1 + num2;
}

let resultadoSuma = sumar(10, 20);
console.log(resultadoSuma);

function restar(num1, num2) {
  return num1 - num2;
}
let resultadoResta = restar(14789, 589);
console.log(resultadoResta);
