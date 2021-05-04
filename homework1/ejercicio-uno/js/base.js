/**
 * 1:
 * Pedir al usuario estos 3 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */
const gravedadTierra = 9.81;
const gravedadLuna = 1.622;
let pesoUsuario;

let pesoLuna;
let nombre = prompt("Dime tu nombre");;
pesoUsuario = parseInt(window.prompt("Cual es tu peso?"));

pesoLuna = (pesoUsuario / gravedadTierra) * gravedadLuna;
console.log(`${nombre} ,tu peso en la luna es ${pesoLuna} kg`);