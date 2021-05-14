/**
 * Ejericio 1:
 * Realizar una funcion que dado un array de strings como parametro
 * retorne un nuevo array con todos los strings que tienen como maximo 5 caracteres
 */

/*const fiveCharactersOnly = (arr) {
    // your code here

}*/

// test



const fiveCaracters = (arr) => {
    return arr.filter((currentValue) => {
        if (currentValue.length <= 5) {
            return currentValue
        }
    })
}
const fiveCharactersOnly = ["dog", "wolf", "family", "eaten", "camping"]
console.log(fiveCaracters(fiveCharactersOnly))






/*
 * Ejericio 2:
 * Realizar una funcion que dado un array de nombres de koders como parametro
 * Retorne un nuevo array con todos koders que tienen mas de 1 nombre
 * 
 */


/*const twoNamesKoders = arr => {
    // your code here
}

// test
let responseTwoNamesKoders = twoNamesKoders(["Antonio", "Victor Yair", "Luis Carlos", "Victor", "José Omar"])
    // ["Victor Yair", "Luis Carlos", "José Omar"]*/