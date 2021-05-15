/*
 * 
 * Ejercicio 1
  [ ["jorge", false] , ["luis", true] , ["Victor", false] ] 
Calcular el numero de personas que si votaron
Output -> 1
Nota: las personas que si votaron tiene true
*/

/const totalVoters = (arr) => {
// your code here
return arr.filter((item) => {
    if (item[1] == true) {
        return item
    }
})
}


console.log(totalVoters([
        ["jorge", false],
        ["luis", true],
        ["Victor", false]
    ]))
    // -> 1*/




/*Ejercicio2

Dado un array con pedidos de un restaurant
la estructura por cada pedido es*/


let menu = ['entrada', 'principal', 'postre', 'precio']

let pedidos = [
    ['ensalada de pepinos', 'paella', 'platano', 100],
    ['ensalada de tomates', 'pescado', 'helado', 120],
    ['ensalada simple', 'paella', 'yogurt', 80],
    ['ensalada simple', 'enchiladas', 'yogurt', 80],
    ['ensalada cesar', 'salmón', 'platano', 100],
]


/* Funcion que devuelve el total de pedidos que tienen como plato principal "paella"
 Funcion que devuelve los pedidos que tienen como postre "platano" o "helado" 
 Funcion que devuelve los pedidos que tengen un precio superior a 90 
 Funcion que devuelve los pedidos que tengen un precio superior a 90 */

const platillos = (pedidos) => {
    // your code here
    return pedidos.map((item) => {
        if (item == 'paella') {
            return item
        }
    })
}

console.log(platillos([
    ['ensalada de pepinos', 'paella', 'platano', 100],
    ['ensalada de tomates', 'pescado', 'helado', 120],
    ['ensalada simple', 'paella', 'yogurt', 80],
    ['ensalada simple', 'enchiladas', 'yogurt', 80],
    ['ensalada cesar', 'salmón', 'platano', 100],
]))