//cilclos
//const nameUser = 'jorge'
//const countRepeat = 5
//for (let i = 1; i = < countRepeat; i++) {
//  console.log(nameUser)
//}

//contar  de 10 a 1 

//for (let i = 10; i >= ; i--) {
// console.log(i)
//}

//for (let i = 10; i >= ; i-=1 ) {
//   console.log(i)
//}

//let stringToread = 'Jorge'
//let erre = stringToread [2]

//for (let i = 0;)

/*Pedir al usuario un numero entre 1 y  10 
imprimir la tabla de multiplicar de ese numero  
por ejemplo 3x1 */

/*let numero = parseInt(window.prompt("Dame un numero del 1 al 10"))

for (var i = 1; i <= 10; i++) {
    console.log(`La tabla del ${numero} es ${numero} X ${i} = ${numero * i} `)
}*/



/**
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * 
 */
let oracion = window.prompt('Escribe una oracion').toLowerCase
let vocales = ''
let consonantes = ''


for (let i = 0; i < oracion.length; i++) {
    if (oracion[i] !== ' ' || oracion[i] !== ',' || oracion[i] !== '.') {

        if (oracion[i] == 'a' ||
            oracion[i] == 'e' ||
            oracion[i] == 'i' ||
            oracion[i] == 'o' ||
            oracion[i] == 'u'
        ) {

            vocales += oracion[i]

        } else {
            consonantes += oracion[i]
        }
    }
}
/**
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 */

/*let numero = parseInt(window.prompt("Dame un numero del 10 y  100"))

for (i = 1; i <= numero; i++) {
    if (i % 2 === 0) {

        console.log(`los numeros pares son ${i}`)
    }
}*/

/*const nombre = 'Joyce'
const coutRepeat = 5

for (let i = 1; i <= coutRepeat; i++) {
    console.log(nombre)
}*/
/*let stringtoread = 'Joyce'
    /*for (let i = 0; i < stringtoread.length; i++) {
        console.log(i, stringtoread[i])
    }*/

/*for (let i = stringtoread.length - 1; i >= 0; i--) {
    console.log(i, stringtoread[i])
}*/
/*const nameUser = window.prompt('¿Cual es tu nombre?')
let strreversed = ''
for (let i = nameUser.length - 1; i >= 0; i--) {
    strreversed += nameUser[i]
}
console.log(strreversed)*/