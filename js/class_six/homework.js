// Metodos de array

/*
Escribir una funcion que tome como parametro un array de numeros e imprima en
consola el array al revés
arrayReverse([1,2,3,4]). 
-> [4,3,2,1]
*/

let miArray = [1, 2, 3, 4, 5, 6]
let arrayReversed = ''

function ReverseNumbers(arr) {
    arrayReversed = arr.reverse()
    console.log(`tu arreglo invertido es ${arrayReversed}`)
}
ReverseNumbers(miArray)
    /*ReverseNumbers = () => (arrayReversed = array.reverse, `tu arreglo invertido es ${arrayReversed}`)*/


/*
Escribir una funcion que tome como parametro 2 arrays, y devuelva un numero 
con la suma total de esos 2 arrays.
arrayReduce([1,2,3,4],[1,2]). 
-> 13
*/
/*let array1 = [1, 2, 3, 4, [1, 2]];
let total = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(total));*/


/*
Escribir una función que tome como parametro 2 arrays, y devuelva un array 
con los numeros repetidos en los 2 arrays
arrayReduce([1,2,3,4],[1,2]). 
-> [1,2]
*/