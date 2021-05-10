/**
 * For
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 */
/*var numeros = 0

for (i = 1; i <= 100; i++) {
    if (numeros i % 3 === 0 ||
        numeros i % 5 === 0 ||
        numeros i % 7 === 0)
}
suma =


    /**
     * While
     * Escribir un programa que le pida al usuario un numero
     * que imprima en consola el numero dado si es positivo
     * si el numero es negativo, salir del ciclo
     * 
     */

/*Pedir al usuario la calificación de un examen ( 0 a 100)  por el prompt
 * Imprimir en consola las equivalencias en letra su calificación, es decir
 * -> si es mayor o igual a 90, imprimir "A"
 * -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
 * -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
 * -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
 * -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
 * -> si es menor 50 , imprimir "F"
 */
/*const scoreExam = parseInt(widow.prompt('¿Cuál fue la califiación de tu ultimo examen?'))
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
}*/


function equivalCalific(scoreExam) {

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
const scoreExam = parseInt(window.prompt('¿Cuál fue la califiación de tu ultimo examen?'))
equivalCalific(scoreExam)


/*const numberIsEven = parseInt(window.prompt('Inserta un número entre 1 y 100'))
numberIsEven % 2 === 0 ? console.log(`${numberIsEven} es par`) : console.log(`${numberIsEven} es impar`)*/