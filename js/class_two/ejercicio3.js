/*let a = 5
let b = 6
a > b ? console.log("a es mayor") : console.log('a es menor')

let expresion = 10
switch (expresion) {
    case 10:
        console.log('el numero es 10')
        break
    case 20:
        console.log('el numero es 20')
        break

    default:
        console.log('no es ni 10 ni 20')
}*/

//pedir calificaciones
//si es 90-> A
//si es 80-> B
//si es 70-> C
//si es 60-> D
//si es 50-> E


let calificacion = parseInt(window.prompt("dame tu calificacion"))

switch (calificacion) {
    case 100:
        console.log('tu calificacion es A+')
        break
    case 90:
        console.log('tu calificacion es A')
        break
    case 80:
        console.log('tu calificacion es B')
        break
    case 70:
        console.log('tu calificacion es C')
        break
    case 60:
        console.log('tu calificacion es D')
        break
    case 50:
        console.log('tu calificacion es E')
        break
    default:
        console.log('reprobaste')
}