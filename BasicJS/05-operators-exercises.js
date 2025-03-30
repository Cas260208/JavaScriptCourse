// 1. Crea una variable para operación aritmética
let suma = 1 +1;
let resta = 8 - 2; 
let multiplicacion = 3 * 9;
let division = 20 / 5;
let modulo = 45 % 5;
let exponente = 2 ** 10;
let incremento = 2 + 1;
let decremento = 2 - 1;

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas.
let asignacionSimple = (suma == resta);
let asignacionSuma = resta;
resta += 2;
let asignacionResta = multiplicacion;
asignacionResta -= 2;
let asignacionMultiplicacion = modulo;
asignacionMultiplicacion *= 2;
let asignacionDivision = incremento;
asignacionDivision /= 2;
let asignacionModulo = decremento;
asignacionModulo %= 2;
let asignacionEsponente = incremento;
asignacionEsponente **= 2;

// 3. Imprime 5 comperaciones verdaderas con diferentes operadores de comparación 
console.log(5 > 2); // Mayor que
console.log(5 < 10); // Menor que
console.log(5 >= 2); // Mayor o igual
console.log(5 <= 10); // Menor o igual
console.log(5 == 5); // Igual (comparación de valor)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 > 10); // Mayor que
console.log(5 < 2); // Menor que
console.log(5 >= 10); // Mayor o igual
console.log(5 <= 2); // Menor o igual
console.log(5 == 10); // Igual (comparación de valor)

// 5. Utiliza el operador lógico and
console.log(5 > 2 && 10 > 5); // Mayor que y menor que

// 6. Utiliza el operador lógico or
console.log(5 > 10 || 10 > 5); // Mayor que o menor que

// 7. Combina ambos operadores lógicos
console.log(5 > 10 && 10 > 5 || 5 < 2 && 2 < 5); // Mayor que y menor que o menor que y mayor que

// 8. Añade alguna negación 
console.log(!(5 > 10 && 10 > 5 || 5 < 2 && 2 < 5));

// 9. Utiliza el operador ternario 
let resultado = (5 > 10) ? "Es verdadero" : "Es falso";

// 10. Combina operadores aritméticos, de comparación y lógicos.
let resultadoFinal = (5 > 10 && 10 > 5) ? (5 + 2) : (5 - 2);
console.log(resultadoFinal); 