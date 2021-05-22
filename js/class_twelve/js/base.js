// events

// click

// const funcionDeClick = () => {
//     console.log('click desde event listener')
// }
// buttonClick.addEventListener('click', funcionDeClick)

/*let buttonClick = document.getElementById('eventlistener')

buttonClick.addEventListener('click', () => {
    console.log('click desde event listener')
})

buttonClick.addEventListener('focus', () => {
    console.log('focus desde event listener')
})

buttonClick.addEventListener('mouseenter', () => {
    console.log('mouseenter desde event listener')
})

buttonClick.addEventListener('mousemove', () => {
    console.log('mousemove desde event listener')
})

buttonClick.addEventListener('mouseleave', () => {
    console.log('mouseleave desde event listener')
})*/


// keyboard events

// inputSearch.addEventListener('keydown', function(){
//     console.log('keydown')
// })
// inputSearch.addEventListener('keypress', function(){
//     console.log('keypress')
// })

/*let inputSearch = document.getElementById('search')
let textSearch = document.getElementById('searchtext')
inputSearch.addEventListener('keyup', function() {
    let text = inputSearch.value
    textSearch.innerText = text
})*/


// websockets 
// AJAX
// Real time
// SG <-F <-Y  







/**
 * Crear una tabla con todos los koders
 * Colocar boton de inscribir a cada koder
 * crear una tabla vacia con los koders inscritos
 * Colocar boton de dar de baja a cada koder
 * Agregar event listener a cada boton
 */
let koders = [{
            id: 23,
            name: 'jorge'
        },
        {
            id: 31,
            name: 'Antonio'
        },
        {
            id: 212,
            name: 'fer'
        },
        {
            id: 20,
            name: 'rose'
        }
    ]
    //Arreglo izquierda POSTULADOS
let listKoders = [...koders]
    //Arreglo derecha INSCRITOS
let enrolledKoders = [{
        id: 234,
        name: 'Yair'
    }]
    // print table koders
const printTableKoders = (arrKoders, selector, type) => {
    // temp
    let accKodersList = ''
    arrKoders.forEach((koder, index) => {
            // si es postulados
            if (type === 'postulado') {
                accKodersList += `
            <tr class="trkoder_${koder.id}">
                <td>${koder.id}</td>
                <td>${koder.name}</td>
                <td>
                    <button class="btn btn-primary enrolledKoderButton" data-id="${koder.id}" data-index="${index}">Inscribir</button>
                </td>
            </tr>
            `
                    // si es inscrito
            } else {
                accKodersList += `
            <tr class="trkoder_${koder.id}">
                <td>${koder.id}</td>
                <td>${koder.name}</td>
                <td>
                    <button class="btn btn-warning removeKoderButton" data-id="${koder.id}" data-index="${index}">Dar de baja</button>
                </td>
            </tr>
            `
            }
        })
        // DOM
    let sel = document.querySelector(selector)
    sel.innerHTML = accKodersList
}
const updateTable = () => {
        //izq
        printTableKoders(listKoders, '.table__koders tbody', 'postulado')
            //der
        printTableKoders(enrolledKoders, '.table__kodersEnrrolled tbody', 'enrolled')
    }
    // lado izq
let wrappKoderList = document.querySelector('.table__koders tbody')
wrappKoderList.addEventListener('click', (event) => {
        console.log(event.target)
        if (event.target.classList.contains('enrolledKoderButton')) {
            //id
            let idKoder = parseInt(event.target.dataset.id)
                // filtro de postulado a inscrito
            let koderItem = listKoders.filter(koder => koder.id === idKoder)
            enrolledKoders.push(koderItem[0])
                // filtro para los que no se les dio click, para quitar al que se dio click
            let kodersNotDeleted = listKoders.filter(koder => koder.id !== idKoder)
            listKoders = [...kodersNotDeleted]
            updateTable()
        }
    })
    // lado der
let wrappKoderEnrrolled = document.querySelector('.table__kodersEnrrolled tbody')
wrappKoderEnrrolled.addEventListener('click', (element) => {
        console.log(element.target.classList)
        if (element.target.classList.contains('removeKoderButton')) {
            let idKoder = parseInt(element.target.dataset.id)

            let enrrolledKoder = enrolledKoders.filter(koder => koder.id == idKoder)
            let newdataEnrrolledKoder = enrolledKoders.filter(koder => koder.id !== idKoder)
            listKoders.push(enrrolledKoder[0])
            enrolledKoders = [...newdataEnrrolledKoder]

            updateTable()
        }
    })
    // mostrar
let btnShow = document.querySelector('.btnShow')
if (btnShow) {
    btnShow.addEventListener('click', () => {
        updateTable()
    })
}

let btnReset = document.querySelector('.btnReset')
if (btnReset) {
    btnReset.addEventListener('click', () => {
        listKoders = listKoders.concat(enrolledKoders)
            // listKoders  = [...listKoders, ...enrolledKoders]
        enrolledKoders = []

        updateTable()
    })
}
let loginForm = document.querySelector('#formLogin')
loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('click en enviar submit');
    // si el input de ID es VACIO
    if (document.querySelector('#idkoder').value === "") {
        alert('Escribe un id')
        return
    }
    // si el input de NAME es VACIO
    if (document.querySelector('#namekoder').value === "") {
        alert('Escribe el nombre del usuario');
        return
    }
    //si no se cumple ninguna
    let idkoder = document.querySelector('#idkoder').value
    let namekoder = document.querySelector('#namekoder').value

    console.log(idkoder, namekoder)
    let newKoder = {
        id: 0,
        name: ''
    }
    console.log(newKoder)
    let wrapplogin = document.querySelector('#formLogin')
    wrapplogin.addEventListener('click', (event) => {

        if (event.target.classList.contains('submit')) {
            //id
            newKoder.id = parseInt(event.target.dataset.id)
            newKoder.name = event.target.dataset.name
                //hacer la condicion

            // filtro para que no se duplique el Id i el name
            //let koderNewItem = listKoders.filter(koder => koders.id != idKoder && koders.name != namekoder)
            //subo al array el Kode rnew
            enrolledKoders.push(newKoder)
            listKoders = [...kodersNew]
            updateTable()
        }
    })

    // tarea
    /*console.log('enviamos a koders list')*/
    // push
    // actualizar
})


/*let koderProfile = {
    id: 0,
    name: ""
}
koderProfile.id = koderID
koderProfile.name = koderName+*/