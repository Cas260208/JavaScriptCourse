// 1.  Cadena de texto (String)
let name = "Casandra Zetina";
let alias = "Tamagotchi";
let email = "cas.26@gmail.com";

// 2. Números (Number)
let age = 22; // Entero
let height = 1.54; // Decimal

// 3. Booleano (boolean)
let isStudent = true; 
let isTeacher = false;

// 4. Undefined (Indefinido)
let undefeniedValue
console.log(undefeniedValue); // undefined

// 5. Null (Nulo)
let nullValue = null;
console.log(nullValue); // null

// 6. Symbol (Símbolo): representa valores unicos y pueden ser representados como propiedades unicos
// con esto se pueden eviatr colisiones entre propiedades de objetos
let mySumbol = Symbol("mysymbol");

// 7. BigInt (Entero grande): permite trabajar con enteros de tamaño arbitrario
let myBigInt = BigInt(1234567890123456789012345678901234567890);
let myBigInt2 = 1234567890123456789012345678901234567890; // Sufijo n para indicar que es un BigInt

// Mostrar los tipos de datos con los que estamos trabajando
console.log(typeof name); // string
console.log(typeof alias); // string
console.log(typeof email); // string
console.log(typeof age); // number
console.log(typeof height); // number
console.log(typeof isStudent); // boolean
console.log(typeof isTeacher); // boolean
console.log(typeof undefeniedValue); // undefined
console.log(typeof nullValue); // object (esto es un error de JavaScript, ya que null no es un objeto)
console.log(typeof mySumbol); // symbol
console.log(typeof myBigInt); // bigint
console.log(typeof myBigInt2); // number (esto es un error de JavaScript, ya que BigInt no es un número)