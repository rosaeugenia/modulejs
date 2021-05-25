//añadir 

let objNewKoder = {
    name: 'Rosy',
    lastname: 'Ortega',
    age: 48,
    position: 'Koder'
}

const request = new XMLHttpRequest()
request.open('POST', 'https://python2g-default-rtdb.firebaseio.com/koders/.json')
request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) {
        return
    } else {
        if (request.status >= 200 && request.status <= 299) {
            const response = request
            const objectResponse = JSON.parse(response.responseText)
            console.log(objectResponse)
        } else {
            console.log('No se pudo ejecutar')
        }
    }
})
request.send(
    JSON.stringify(objNewKoder)
)

//Borrar 

const requestDelete = new XMLHttpRequest()
let idKoder = '-MaWC7TH9nOJUY5LHzQs'
requestDelete.open('DELETE', `https://python2g-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
requestDelete.addEventListener('readystatechange', () => {
    if (requestDelete.readyState !== 4) {
        return
    } else {
        if (requestDelete.status >= 200 && requestDelete.status <= 299) {
            const response = requestDelete
            const objectResponse = JSON.parse(response.responseText)
            console.log(objectResponse)
        } else {
            console.log('No se pudo ejecutar')
        }
    }
})
requestDelete.send()

//Modifica con Put todos los campos del objeto 
let objNewKoder = {
    name: 'Jorge',
    lastname: 'Camarillo',
    age: 31,
    position: 'Mentor'
}

const request = new XMLHttpRequest()
request.open('PUT', 'https://python2g-default-rtdb.firebaseio.com/koders/-MaWLxzVCCNQJFAiwYcK.json')
request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) {
        return
    } else {
        if (request.status >= 200 && request.status <= 299) {
            const response = request
            const objectResponse = JSON.parse(response.responseText)
            console.log(objectResponse)
        } else {
            console.log('No se pudo ejecutar')
        }
    }
})
request.send(
    JSON.stringify(objNewKoder)
)