/**
 * 2:
 * Pedir al usuario la calificación de un examen ( 0 a 100)  por el prompt
 * Imprimir en consola las equivalencias en letra su calificación, es decir
 * -> si es mayor o igual a 90, imprimir "A"
 * -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
 * -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
 * -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
 * -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
 * -> si es menor 50 , imprimir "F"
 */
let calificacion = parseInt(window.prompt("Cual es tu calificacion (0 a 100 )?"));
if (calificacion >= 90) {
    console.log(`Tu calificación ${calificacion} equivale a  "A"`)
} else
if (calificacion >= 80 & calificacion < 90) {
    console.log(`Tu calificación ${calificacion} equivale a  "B"`)
} else
if (calificacion >= 70 & calificacion < 80) {
    console.log(`Tu calificación ${calificacion} equivale a  "C"`)
}
if (calificacion >= 60 & calificacion < 70) {
    console.log(`Tu calificación  ${calificacion} equivale a  "D"`)

}
if (calificacion >= 50 & calificacion < 60) {
    console.log(`Tu calificación ${calificacion} equivale a  "E"`)

}
if (calificacion < 50) {
    console.log(`Tu calificación  ${calificacion} equivale a "F"`)
}