// Operadores

// Operadores aritmeticos
let a = 5;
let b = 10;
console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División

console.log(a % b); // Módulo (resto de la división)
console.log(a ** b); // Exponenciación (a elevado a la b)

a++;
console.log(a); // Incremento (a = a + 1)

b--;
console.log(b); // Decremento (b = b - 1)

// Operadores de asignación 
let myVariable = 2; // Asignación simple: igual 
console.log(myVariable); 
myVariable += 2; // Asignación de suma: myVariable = myVariable + 2
console.log(myVariable); 

myVariable -= 2; // Asignación de resta: myVariable = myVariable - 2
console.log(myVariable);

myVariable *= 2; // Asignación de multiplicación: myVariable = 
console.log(myVariable);

myVariable /= 2; // Asignación de división: myVariable = myVariable / 2
console.log(myVariable);

myVariable %= 2; // Asignación de módulo: myVariable = myVariable % 2
console.log(myVariable);

myVariable **= 2; // Asignación de exponenciación: myVariable = myVariable ** 2
console.log(myVariable);

// Operadores de comparación
console.log(a > b); // Mayor que
console.log(a < b); // Menor que
console.log(a >= b); // Mayor o igual
console.log(a <= b); // Menor o igual
console.log(a == b); // Igual (comparación de valor)
console.log(a == "6"); // Igual (comparación de valor y tipo)
console.log(a === a);
console.log(a === 6); // Igual (comparación de valor y tipo)
console.log(a === "6"); // Igual (comparación de valor y tipo)
console.log(a != 6);
console.log(a !== 6);
console.log(0 == false);
console.log(1 == false);
console.log(0 == "");
console.log(0 == "Hola");
console.log(0 === "");
console.log(undefined == null);

// Truthy values (valores verdaderos)
// Todos los numeros positivos y negativos menos el cero 
// Todas las cadendas de texto menos las vacías 
// Todos los boolean

/**Falsy values (valores falsos)
 * 0
 * 0n
 * null
 * undefined
 * NaN
 * El boolean false
 * Cadenas de texto vacías
 */

// Operadores lógicos

// And (&&)
console.log (5 > 10 && 15 > 20);
console.log (5 > 10 && 15 < 20); 
console.log (5 < 10 && 15 > 20); 

// Or (||)
console.log (5 > 10 || 15 > 20);
console.log (5 > 10 || 15 < 20);
console.log (5 < 10 || 15 > 20);

console.log(5 > 10 && 15 > 20 || 30 < 40);

// not (!)
console.log(!true);
console.log(!(5 > 10 && 15 > 20)); 
console.log(!(5 > 10 || 15 > 20));

// Operador ternario
const isRaining = true;
isRaining ? console.log("Esta llvoeindo") : console.log("No esta lloviendo");
 