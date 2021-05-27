console.log('ajax')
    /**
     * AJAX. Asyncronous Java Script And XML
     * JSON
     * XHR -> xmlhttprequest
     * Fetch
     */

// Instanciarlo
// Abrir la conexion
// Enviar la petición

// const printPosts = (arr) => {
//     let acc = ''
//     arr.forEach(post => {
//         acc += `
//         <li class="list-group-item d-flex justify-content-between">
//             <p class="pr-4">${post.id}</p> <br>
//             <p class="pr-4">${post.title}</p>
//             <p class="pr-4">${post.body}</p>
//             <a href="/post.html?idpost=${post.id}" class="pr-4">Ver post</a>

//         </li>
//         `
//     });
//     let list__koders = document.querySelector('.list__koders')
//     list__koders.innerHTML = acc
// }

// let responseAJAx ;
// const request = new XMLHttpRequest()
// request.open('GET','https://jsonplaceholder.typicode.com/users/')
// request.addEventListener('readystatechange', () => {
//     if(request.readyState !== 4) {
//         return 
//     } else {
//         if(request.status >= 200 && request.status <= 299){
//             const response  = request
//             const objectResponse = JSON.parse(response.responseText)
//             responseAJAx = objectResponse
//             printPosts(objectResponse)

//         } else {
//             console.log('No se pudo ejecutar')
//         }
//     } 
// })
// request.send()
// console.log(responseAJAx)


// Http Methods  

// 'GET' -> Obtener data
// 'POST' -> enviar nueva data
// 'DELETE' -> Elimina data

// actuan sobre data existente
// 'PATCH' -> Actualiza parte de la data
// 'PUT' -> Actualiza toda la data

// CRUD

// Create
// Read
// Update
// Delete 




// POST


// let objNewKoder = {
//     name : 'jorge',
//     lastname : 'camarillo',
//     age: 30,
//     position : 'mentor'
// }

// const request = new XMLHttpRequest()
// request.open('POST','https://python2g-default-rtdb.firebaseio.com/koders/.json')
// request.addEventListener('readystatechange', () => {
//     if(request.readyState !== 4) {
//         return 
//     } else {
//         if(request.status >= 200 && request.status <= 299){
//             const response  = request
//             const objectResponse = JSON.parse(response.responseText)
//             console.log(objectResponse)
//         } else {
//             console.log('No se pudo ejecutar')
//         }
//     } 
// })
// request.send(
//     JSON.stringify(objNewKoder)
// )





// // {name: "-MaWC7TH9nOJUY5LHzQs"}



// const requestDelete = new XMLHttpRequest()
// let  idKoder = '-MaWC7TH9nOJUY5LHzQs'
// requestDelete.open('DELETE',`https://python2g-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
// requestDelete.addEventListener('readystatechange', () => {
//     if(requestDelete.readyState !== 4) {
//         return 
//     } else {
//         if(requestDelete.status >= 200 && requestDelete.status <= 299){
//             const response  = requestDelete
//             const objectResponse = JSON.parse(response.responseText)
//             console.log(objectResponse)
//         } else {
//             console.log('No se pudo ejecutar')
//         }
//     } 
// })
// requestDelete.send()


// // PUT 
// // PATCH

// let objNewKoder = {
//     name : 'Jorge',
//     lastname : 'Camarillo',
//     age: 31,
//     position : 'Mentor'
// }

// const request = new XMLHttpRequest()
// request.open('PUT','https://python2g-default-rtdb.firebaseio.com/koders/-MaWLxzVCCNQJFAiwYcK.json')
// request.addEventListener('readystatechange', () => {
//     if(request.readyState !== 4) {
//         return 
//     } else {
//         if(request.status >= 200 && request.status <= 299){
//             const response  = request
//             const objectResponse = JSON.parse(response.responseText)
//             console.log(objectResponse)
//         } else {
//             console.log('No se pudo ejecutar')
//         }
//     } 
// })
// request.send(
//     JSON.stringify(objNewKoder)
// )

// let objNewKoder = {
//     name : 'Jorge Luis',
//     position : 'mentor',
//     rfc: '131231nnajlddjalk'
// }

// const request = new XMLHttpRequest()
// request.open('PATCH',
// 'https://python2g-default-rtdb.firebaseio.com/koders/-MaWLxzVCCNQJFAiwYcK.json')
// request.addEventListener('readystatechange', () => {
//     if(request.readyState !== 4) {
//         return 
//     } else {
//         if(request.status >= 200 && request.status <= 299){
//             const response  = request
//             const objectResponse = JSON.parse(response.responseText)
//             console.log(objectResponse)
//         } else {
//             console.log('No se pudo ejecutar')
//         }
//     } 
// })
// request.send(
//     JSON.stringify(objNewKoder)
// )