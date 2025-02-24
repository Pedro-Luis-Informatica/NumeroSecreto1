// bucle while
/*
La estructura while permite crear bucles que se ejecutan ninguna o 
más veces, dependiendo de la condición indicada.
El funcionamiento del bucle while se resume en: mientras se cumpla la 
condición indicada, repite indefinidamente las instrucciones 
incluidas dentro del bucle.
*/
console.log("while");
let i = 100; // inicializamos la variable i
while (i > 0) {
  // mientras i sea menor que 10
  console.log("solo faltan", i, "pasos por caminar"); // funcion a cumplirse
  i = i - 1; // incrementamos i en 1
}

// bucle do-while
/*
 Al igual que while, se repite hasta que una condición especificada se evalúe 
como falsa. La diferencia es que, la condición se evalúa después de ejecutar 
la sentencia, esto hace que que la sentencia se ejecute al menos una vez.

*/
console.log("do-while");
let j = 0; // inicializamos la variable j
do {
  console.log(j); // funcion a cumplirse
  j = j + 1; // incrementamos j en 1
} while (j < 0); // mientras j sea menor que 10
