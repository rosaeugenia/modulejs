// crear usuario
btncreate = document.getElementById('btn__create--koder')
btncreate.addEventListener('click', () => {

    inputname = document.getElementById('name').value
    inputlastname = document.getElementById('lastname').value
    inputage = parseInt(document.getElementById('age').value)
    inputposition = document.getElementById('position').value

    if (inputname == '' || inputlastname == '' || inputage == '' || inputposition == '') {
        alert('Llena todos los datos')
        return
    }

    let newUserObject = {
        name: inputname,
        lastname: inputlastname,
        age: inputage,
        position: inputposition
    }

    const requestNewKoder = new XMLHttpRequest()
    requestNewKoder.open('POST', 'https://python2grose-default-rtdb.firebaseio.com/koders/.json')
    requestNewKoder.addEventListener('readystatechange', () => {
        if (requestNewKoder.readyState !== 4) {
            return
        } else {
            if (requestNewKoder.status >= 200 && requestNewKoder.status <= 299) {
                const response = requestNewKoder
                const objectResponse = JSON.parse(response.responseText)
                console.log(objectResponse)

            } else {
                console.log('No se pudo ejecutar')
            }
        }
    })
    requestNewKoder.send(
        JSON.stringify(newUserObject)
    )


})

// 1 Crear la pagina de actualizar cualquier usuario
// 2. Crear la pantala del listado
// 2.1. Por cada koder crear un boton de eliminar
// 2.2. Por cada koder, crear una pagina de interior