function equivalCalific() {
    const scoreExam = parseInt(window.prompt('¿Cuál fue la califiación de tu ultimo examen?'))
    if (scoreExam >= 90) {
        console.log('Tu calificación es una A')
    } else if (scoreExam >= 80 && scoreExam < 90) {
        console.log('Tu calificación es una B')
    } else if (scoreExam >= 70 && scoreExam < 80) {
        console.log('Tu calificación es una C')
    } else if (scoreExam >= 60 && scoreExam < 70) {
        console.log('Tu calificación es una D')
    } else if (scoreExam >= 50 && scoreExam < 60) {
        console.log('Tu calificación es una E')
    } else {
        console.log('Tu calificación es una F')
    }

}

equivalCalific()



/**/

/* 2:
 * Pedir al usuario que indique como esta su día
 * Opciones: Nublado, Soleado, Lluvioso, Nevado
 * Si escribe alguna de ellas, colocar un mensaje 
 * P.ej: soleado -> oh!, que buen clima para estar en la playa
 * P.ej: nevado -> oh!, que buen clima para estar en casa
 *  etc...
 * Sino
 * Pedir por prompt, Que describa que le gustaria hacer en su día
 */

/*const weather = prompt('¿Cómo está el clima?')
switch (weather) {
    case 'soleado':
        console.log('oh!, que buen clima para estar en la playa')
        break
    case 'lluvioso':
        console.log('oh!, que buen clima para estar en la playa')
        break
    case 'nevado':
        console.log('oh!, que buen clima para quedarse en casa')
        break
    case 'nublado':
        console.log('oh!, que buen clima para tomar café')
        break
    default:
        const weatherDescription = prompt('¿Describime tu día?')
        console.log(weatherDescription)
}*/

function clima() {
    const weather = prompt('¿Cómo está el clima?')
    switch (weather) {
        case 'soleado':
            console.log('oh!, que buen clima para estar en la playa')
            break
        case 'lluvioso':
            console.log('oh!, que buen clima para estar en la playa')
            break
        case 'nevado':
            console.log('oh!, que buen clima para quedarse en casa')
            break
        case 'nublado':
            console.log('oh!, que buen clima para tomar café')
            break
        default:
            const weatherDescription = prompt('¿Describime tu día?')
            console.log(weatherDescription)
    }
}
clima()

/**3
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 */

/*let numero = parseInt(window.prompt("Dame un numero del 10 y  100"))

for (i = 1; i <= numero; i++) {
    if (i % 2 === 0) {

        console.log(`los numeros pares son ${i}`)
    }
}*/

function numerosPares() {

    let numero = parseInt(window.prompt("Dame un numero del 10 y  100"))

    for (i = 1; i <= numero; i++) {
        if (i % 2 === 0) {

            console.log(`los numeros pares son ${i}`)
        }
    }
}
numerosPares()


function showMessage() {
    alert('Hola mundo! ');
}
showMessage()

/*4:
 * Pedir el nombre de una persona
 * Verificar si el nombre termina con una vocal
 * imprimir que `Tu nombre termina con ${vocal}`
 * Sino
 * imprimir que `Tu nombre termina con ${consonante}`
 * -> Pedro
 * -> `Tu nombre termina con o`
 */
function LastLetter() {
    const namePerson = window.prompt('Cual es tu nombre')
    const lastWordName = namePerson.charAt(namePerson.length - 1).toLowerCase()
    console.log(`Tu nombre termina con ${lastWordName}`)
    if (
        lastWordName == "a" ||
        lastWordName == "e" ||
        lastWordName == "i" ||
        lastWordName == "o" ||
        lastWordName == "u") {

    } else {
        console.log(`Tu nombre termina con ${lastWordName}`)
    }
}
LastLetter()

/*5  Pedir el nombre de una persona
 * Imprimir el nombre de la persona al revés y en mayúsculas
 * P.ej: juan
 * -> NAUJ
 */
function voltearNombre() {
    const nameToReverse = window.prompt('¿Cuál es tu nombre?')
    const nameReversed = nameToReverse.split('').reverse().join('')
    console.log(nameReversed.toUpperCase())
}
voltearNombre()

/* 6:
 * Pedir una palabra por promt
 * Pedir un número entre 1 y 10
 * Duplicar esa cantidad de veces esa palabra e imprimir en consola
 * P.ej: 
 * "Kodemia"
 * 4
 * -> "Kodemia Kodemia Kodemia Kodemia"
 */

function repitePalabra() {

    const wordToRepeat = window.prompt('¿Dame una palabra random?').concat(' ')
    const numberRepeat = window.prompt('¿Cuantas veces quieres repetir la palabra?')
    const wordRepeated = wordToRepeat.repeat(numberRepeat)
    console.log(wordRepeated)
}
repitePalabra()
    /*7 ejercicio*/

function verificarPalindromo() {
    const oracion = window.prompt('Dime una oracion').toLowerCase()
    let string = oracion
    let normalString = string.split(' ').join('')
    let reverseString = normalString.split('').reverse().join('')
    normalString === reverseString ? console.log('Es palindromo') : console.log('No es palindromo')
}
verificarPalindromo()

/**
 * 8:
 * pedir el usuario un numero entre 1 y 10
 * Imprimir en consola el siguiente patrón
 * donde la cantidad mas grande de * es el Numero del usuario
 * P.ej. el usuario introduce 5 
 * Resultado esperado
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
 */

function pintaAsteriscos() {
    let limit = parseInt(window.prompt("dame un numero"))
    let char = ''
    for (let i = 1; i <= limit; i++) {
        char += '*'
        console.log(char)
        if (i == limit) {
            for (let i = limit - 1; i >= 1; i--) {
                console.log(char.substring(0, i))
            }

        }
    }
}
pintaAsteriscos()