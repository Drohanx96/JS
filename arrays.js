//Arreglo o vector
var miArreglo = ["Johan", 26];

console.log(miArreglo);

//Arreglo bidimensional o matriz
var alumnos = [["Johan", 26], ["Luis", 21], ["Scarleth", 23]];

console.log(alumnos);

//Acceder a los valores del arreglo
console.log(miArreglo[0]);
/** 
 * console.log(miArreglo[0][0]); en un vector podemos usar esta notacion de conchetes y acceder al valor del vector y acceder a un valo de la cadena.
 */

//Modificar datos del arreglo
miArreglo[1] = 27;
console.log(miArreglo);

//Acceder a matrices
var matriz = [[1,2,3], [4,5,6],[7,8,9]];
console.log(matriz[1]);
console.log(matriz[1][0]);

matriz[2][2] = "Johan";
console.log(matriz[2][2][0]); 
//Accedimos a un valor de una cadena dentro de una matriz

//*Operaciones con arrays
//Metodo push (añadir al final)

var estaciones = ["Invierno", "Otoño", "Primavera"];

estaciones.push("Verano");

console.log(estaciones);

//Metodo pop (quitar del final)
//El metodo pop puede remover del final y se puede asignar el valor removido a una variable

var estacion = estaciones.pop();

console.log(estaciones);
console.log(estacion);

estaciones.push(estacion);
console.log(estaciones);

//Metodo shift (quitar del inicio)
//Podemos hacer lo mismo que con pop, solo que alinicio del array
estacion = estaciones.shift();

console.log(estaciones);
console.log(estacion);

//Metodo unshift (añadir al inicio)
estaciones.unshift(estacion);
console.log(estaciones);
