// editar usuario
const params = new URLSearchParams(window.location.search)
let idkoder = params.get('idkoder')
console.log(idkoder)

//peticion lista de koders
const getAllKodersFetch = () => {
        // GET
        fetch(`https://python2g-default-rtdb.firebaseio.com/koders/${idkoder}.json`)
            .then((result) => {
                //console.log(result)
                return result.json()
            })
            .then((response) => {
                let { age, lastname, name, position } = response
                document.getElementById('name').setAttribute('value', name)
                document.getElementById('lastname').setAttribute('value', lastname)
                document.getElementById('age').setAttribute('value', age)
                document.getElementById('position').setAttribute('value', position)

            })

        .catch(function(error) {
            console.log(error.message);
        })
    }
    /*const request = new XMLHttpRequest()
    /*request.open('PUT', 'https://python2g-default-rtdb.firebaseio.com/koders/${idkoder}.json')
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            return
        } else {
            if (request.status >= 200 && request.status <= 299) {
                const response = request
                const objectResponse = JSON.parse(response.responseText)
                console.log(objectResponse)
                window.location.pathname = '/'

            } else {
                console.log('No se pudo ejecutar')
            }
        }
    })

    request.send(
        JSON.stringify(newUserObject)
    )*/
getAllKodersFetch()

let btnedit = document.getElementById('btn__edit--koder')
btnedit.addEventListener('click', () => {

    inputname = document.getElementById('name').value
    inputlastname = document.getElementById('lastname').value
    inputage = parseInt(document.getElementById('age').value)
    inputposition = document.getElementById('position').value

    if (inputname == '' || inputlastname == '' || inputage == '' || inputposition == '') {
        console.log('Faltan datos obligatorios')
        return
    }

    let edituser = {
        name: inputname,
        lastname: inputlastname,
        age: inputage,
        position: inputposition
    }

    fetch('https://python2grose-default-rtdb.firebaseio.com/koders/${idkoder}.json', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(edituser)
        })
        .then((res) => {
            return res.json()
        })
        .then((response) => {
            window.location.pathname = '/'
        })
        .catch(function(error) {
            console.log(error.message);
        });
})