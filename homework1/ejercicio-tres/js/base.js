/**
 * 3:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * Comparar si ese numero es divisible entre 2, 3 u 11
 * Imprimir en consola un mensaje que indique de que numero(s) es múltiplo
 * p.ej. 6 es multiplo de 2 y de 3
 * p.ej. 22 es multiplo de 2 y de 11
 * p.ej. 21 es multiplo de 3
 * Sino, enviar un mensaje en consola que lo indique
 */


let numero = parseInt(window.prompt("Dame un numero"))
console.log(numero)
if (numero % 2 === 0) {
    console.log(`el numero ${numero} es multiplo de 2`)
} else {
    console.log(`el numero ${numero} no es multiplo de 2`)
}

if (numero % 3 === 0) {
    console.log(`el numero ${numero} es multiplo de 3`)
} else {
    console.log(`el numero ${numero} no es multiplo de 3`)
}

if (numero % 11 === 0) {
    console.log(`el numero ${numero} es multiplo de 11`)
} else {
    console.log(`el numero ${numero} no es multiplo de 11`)
}