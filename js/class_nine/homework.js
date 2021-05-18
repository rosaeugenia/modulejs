/* Teniendo como base este array de objetos*/

let library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
]


const busyBook = (arr) => arr.filter(readingStatus => library.readingStatus == true)
console.log('Libros Ocupados')
console.log(busyBook(library))

/* Crear las funciones que :
 * Ordene el array de objetos de acuerdo al autor
 * Ordene el array de objetos de acuerdo al "readingStatus"
 * Filtre los libros que estan ocupados
 */



/**
 * Dado un string
 * crear una funcion que sustitya cada caracter del string
 * con la letra siguiente del abecedario
 
const moveCharsForward = (str) =>{
    // code here
}  
console.log(moveCharsForward('abcde'))
// -> 'bcdef'
*/

/**
 * Dado un array con objetos que tienen la propiedad de fecha de nacimiento
 * convertir las fechas de formato yyyy/mm/dd
 * al formato dd/mm/yyyy
[
    {
        name:'Jorge',
        birthdate: '1991/05/12'
    },
    {
        name:'luis',
        birthdate: '1991/02/12'
    },
    {
        name:'mario',
        birthdate: '1991/04/12'
    },
    {
        name:'victor',
        birthdate: '1991/09/12'
    }
]
const convertBirthdates = (arr) =>{
  

    // code here
}  
console.log(moveCharsForward( [{ name:'Jorge', birthdate: '1991-0/05/12' }] ))
// -> [{ name:'Jorge', birthdate: '05/12/1991' }, ...]
 */