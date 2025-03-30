let myName = "Casandra"; 
let greeting = "Hello, " + myName + "!"; 
console.log(greeting); // Hello, Casandr!
console.log(typeof greeting);

// Longitud 
console.log(greeting.length);

// Acceso a caracteres 
console.log(greeting[12]);
console.log(greeting[18]);

// Métodos menos comunes 
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("Casandra")); //Encontrar elemento y si imprime -1 es que no hay esa palabra
console.log(greeting.includes("Casandra")); //Te dice si existe o no
console.log(greeting.slice(0, 10)); // te imprime de ciertos indices a otros indices
console.log(greeting.replace("Casandra", "Tamagotchi")); // Cambia una palabra por otra

// Temple literals (plantilla literales)
let message = `Hola este es mi aprednizaje de 
java script`;
console.log(message);

let email = "cas.26@gmail.com"
console.log(`Hola, ${myName}tu email es: ${email}`); // No funciona porque no es un template literal);