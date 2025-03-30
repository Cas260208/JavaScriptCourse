// 1. Escribe un comentario en una linea
// Hola, soy un comentario :D

// 2. Escribe un comentario en varias lineas
/**
 * Hola, soy un comentario en varias lineas
 * Estoy en la segunda linea
 */

// 3. Declara variables con calores asociados a todos los datos primitivos
let stringValu = "Hola, soy un string";
let numberValue = 1234567890;
let booleanValue = true;
let undefinedValue;
let nullValue = null;
let symbolValue = Symbol("symbolValue");    
let bigIntValue = BigInt(1234567890123456789012345678901234567890);

// 4. Imprime por consola el valor de todad las variables 
console.log(stringValu); // Hola, soy un string
console.log(numberValue); // 1234567890
console.log(booleanValue); // true
console.log(undefinedValue); // undefined
console.log(nullValue);
console.log(symbolValue); // Symbol(symbolValue)
console.log(bigIntValue); // 1234567890123456789012345678901234567890n

// 5. Imprime por consola el tipo de dato de cada variable
console.log(typeof stringValu); // string
console.log(typeof numberValue); // number
console.log(typeof booleanValue); // boolean
console.log(typeof undefinedValue); // undefined
console.log(typeof nullValue); // object (esto es un error de JavaScript, ya que null no es un objeto)
console.log(typeof symbolValue); // symbol
console.log(typeof bigIntValue); // bigint (esto es un error de JavaScript, ya que BigInt no es un número)

// 6. Modifica los valores de las variables por otros del mismo tipo 
stringValu = "Casandra Zetina";
numberValue = 22;
booleanValue = false;
undefinedValue = "Ahora tengo un valor definido";
nullValue = "Ahora tengo un valor definido";
symbolValue = Symbol("nuevoSymbolValue");
bigIntValue = BigInt(1234567890123456789012345678901234567890);

// 7. Modifica los valores de las variables por otros de distinto tipo
stringValu = 1234567890;
numberValue = false;
booleanValue = BigInt(true);
undefinedValue = null;
nullValue = 24;
symbolValue = null;
bigIntValue = "flores";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const string = "Ivan";
const number = 22;
const boolean = false;
// const undefined = undefined;
//const null = null;
const symbol = Symbol("symbol");
const bigint = BigInt(123456789012345678902345678912345678901234567890123456789123456781234567123456782345678);

// 9. Modifica los valores de las constantes
//string = "Casandra";
//number = 25;
//boolean = true;
undefined = "Ahora tengo un valor definido";
//null = "Ahora tengo un valor definido";
//symbol = "Hola";
//bigint = 12343434;

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarlas 
