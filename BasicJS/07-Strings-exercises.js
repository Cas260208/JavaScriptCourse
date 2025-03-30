// 1. Concatena dos cadenas de texto
let cad1 = "años";
let cad2 = "Iván Garrido";
let cadena = "El nombre de mi novio es: " + cad2 + " y llevo 3 " + cad1 + ".";

// 2. Muestra la longitud de una cadenad e texto
console.log(cadena.length);

// 3. Muestra el primer y el último carácter de un string
console.log(cadena[0]);
console.log(cadena.length - 1); 

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let multiString = `Hola, soy 
Casandra y tengo 22 años, estudio en la 
UAM Cuajimalpa.`

// 6. Interpola el valor de una variable en un string
console.log(`Hola, soy ${cad2} y tengo 24 años.`); 

// 7. Reemplaza todos los espacios en blaco de un string por guiones 
console.log(cadena.replace(/ /g, "-")); // Cambia todos los espacios por guiones 

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena.includes("Iván"));

// 9. Comprueba si dos string son iguales 
console.log(cad1 === cad2); // false porque son diferentes

// 10. Comprueba si dos strings tienen la misma longitud 
console.log(cad1.length == cad2.length); // false porque son diferentes
