// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const readlineSync = require('readline-sync');

let usuario = "Casandra";
let contrasenia = "Cas260208";

let username = readlineSync.question("Ingresa tu nombre de usuario: ");
let password = readlineSync.question("Ingresa tu contrasenia: ");

if (usuario === username && contrasenia === password) {
  console.log("Tus datos ingresados coinciden");
} else {
  console.log("Tus datos ingresados no coinciden");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad 

// 6. Muestra en que estación del años nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependidendo de la variable del ejercicio anterior 

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7