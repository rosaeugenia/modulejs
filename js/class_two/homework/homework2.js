// 1:
// Pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes y su nombre
// p.ej.
// --> El mes 5 (Mayo) tiene 31 días



const numberMonth = parseInt(window.prompt('Escribe el un número entre 1 y 12'))
if (numberMonth == 1) {
    console.log(`El mes ${numberMonth} Enero tiene 31 dias`)
} else if (numberMonth == 2) {
    console.log(`El mes ${numberMonth} Febrero tiene 28 dias`)
} else if (numberMonth == 3) {
    console.log(`El mes ${numberMonth} Marzo tiene 31 dias`)
} else if (numberMonth == 4) {
    console.log(`El mes ${numberMonth} Abril tiene 30 dias`)
} else if (numberMonth == 5) {
    console.log(`El mes ${numberMonth} Mayo tiene 31 dias`)
} else if (numberMonth == 6) {
    console.log(`El mes ${numberMonth} Junio tiene 30 dias`)
} else if (numberMonth == 7) {
    console.log(`El mes ${numberMonth} Julio tiene 31 dias`)
} else if (numberMonth == 8) {
    console.log(`El mes ${numberMonth} Agosto tiene 31 dias`)
} else if (numberMonth == 9) {
    console.log(`El mes ${numberMonth} Septiembre tiene 30 dias`)
} else if (numberMonth == 10) {
    console.log(`El mes ${numberMonth} Octubre tiene 31 dias`)
} else if (numberMonth == 11) {
    console.log(`El mes ${numberMonth} Noviembre tiene 30 dias`)
} else if (numberMonth == 12) {
    console.log(`El mes ${numberMonth} Diciembre tiene 31  dias`)
} else if (numberMonth == 0 || numberMonth >= 13) {
    console.log(`No es un numero valido`)
}


let numberMonth = parseInt(window.prompt('Escribe el un número entre 1 y 12'))

switch (numberMonth) {
    case 1:
        console.log(`El mes ${numberMonth} Enero tiene 31 dias`)
        break
    case 2:
        console.log(`El mes ${numberMonth} Febrero tiene 28 dias`)
        break
    case 3:
        console.log(`El mes ${numberMonth} Marzo tiene 31 dias`)
        break
    case 4:
        console.log(`El mes ${numberMonth} Abril tiene 30 dias`)
        break
    case 5:
        console.log(`El mes ${numberMonth} Mayo tiene 31 dias`)
        break
    case 6:
        console.log(`El mes ${numberMonth} Junio tiene 30 dias`)
        break
    case 7:
        console.log(`El mes ${numberMonth} Julio tiene 31 dias`)
        break
    case 8:
        console.log(`El mes ${numberMonth} Agosto tiene 31 dias`)
        break
    case 9:
        console.log(`El mes ${numberMonth} Septiembre tiene 30 dias`)
        break
    case 10:
        console.log(`El mes ${numberMonth} Octubre tiene 31 dias`)
        break
    case 11:
        console.log(`El mes ${numberMonth} Noviembre tiene 30 dias`)
        break
    case 12:
        console.log(`El mes ${numberMonth} Diciembre tiene 31  dias`)
        break
    default:
        console.log(`No es un numero valido`)
}


/**
 * 2:
 * Pedir al usuario que indique como esta su día
 * Opciones: Nublado, Soleado, Lluvioso, Nevado
 * Si escribe alguna de ellas, colocar un mensaje 
 * P.ej: soleado -> oh!, que buen clima para estar en la playa
 * P.ej: nevado -> oh!, que buen clima para estar en casa
 *  etc...
 * Sino
 * Pedir por prompt, Que describa que le gustaria hacer en su día
 */




let dia = window.prompt('¿Como esta tu dia? (nublado, soleado, lluvioso, nevado)').toLowerCase()

if (dia == 'nublado') {
    console.log(`El dia esta ${dia} oh! ver una pelicula`)

} else if (dia == 'soleado') {
    console.log(`El dia esta ${dia} oh! que buen clima para estar en la playa`)
} else if (dia == 'lluvioso') {
    console.log(`El dia esta ${dia} oh! que buen clima para usar un paraguas`)
} else if (dia == 'nevado') {
    console.log(`El dia esta ${dia} oh! que buen clima para estar en casa`)
}


let dia = window.prompt('¿Como esta tu dia? (nublado, soleado, lluvioso, nevado)').toLowerCase()
switch (dia) {
    case 'soleado':
        console.log(`El dia esta ${dia} oh! que buen clima para estar en la playa`)
        break
    case 'lluvioso':
        console.log(`El dia esta ${dia} oh! que buen clima para usar un paraguas`)
        break
    case 'nublado':
        console.log(`El dia esta ${dia} oh! ver una pelicula`)
        break
    case 'nevado':
        console.log(`El dia esta ${dia} oh! que buen clima para estar en casa`)
        break
    default:
        console.log(`que te gustaria hacer`)
}

/**
 * 3:
 * Pedir el nombre de una persona
 * Verificar si el nombre termina con una vocal
 * imprimir que `Tu nombre termina con ${vocal}`
 * Sino
 * imprimir que `Tu nombre termina con ${consonante}`
 * -> Pedro
 * -> `Tu nombre termina con o`
 */

let nombre = window.prompt('¿Cual es tu nombre?)')

var ultimaLetra = nombre.charAt(nombre.length - 1).toLowerCase()

ultimaLetra == "a" || ultimaLetra == 'e' || ultimaLetra == 'i' || ultimaLetra == 'o' || ultimaLetra == 'u' ? console.log(`Tu nombre ${nombre} termina en vocal, tu nombre termina con ${ultimaLetra}`) : console.log(`Tu nombre termina en consonante`)



/**
 * 4:
 * Pedir el nombre de una persona
 * Imprimir el nombre de la persona al revés y en mayúsculas
 * P.ej: juan
 * -> NAUJ
 */
let nombre = window.prompt('¿Cual es tu nombre?)')
var reves = nombre.split('').reverse().join()
console.log(reves.toUpperCase())


/**
 * Pedir una palabra por promt
 * Pedir un número entre 1 y 10
 * Duplicar esa cantidad de veces esa palabra e imprimir en consola
 * P.ej: 
 * "Kodemia"
 * 4
 * -> "Kodemia Kodemia Kodemia Kodemia"
 */

let palabra = window.prompt("Escribe una palabra")
const multi = parseInt(window.prompt('Escribe el un número entre 1 y 10'))

let palabraRepetir = palabra.repeat(multi)
console.log("palabraRepetir")