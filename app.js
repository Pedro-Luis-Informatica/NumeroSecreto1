// bucle while
console.log("while");
let i = 100; // inicializamos la variable i
while (i > 0) {
  // mientras i sea menor que 10
  console.log("solo faltan", i, "pasos por caminar"); // funcion a cumplirse
  i = i - 1; // incrementamos i en 1
}

// bucle do-while
console.log("do-while");
let j = 0; // inicializamos la variable j
do {
  console.log(j); // funcion a cumplirse
  j = j + 1; // incrementamos j en 1
} while (j < 0); // mientras j sea menor que 10
