console.log('hola')
    /*let koders = ['antonio', 'victor', 'rose', 'jorge']
    let listKoders = ''
    koders.forEach((namekoder, index) => {
        listKoders += `
            <li 
                id="koder${index + 1}"
                key='koder_${index}'
                class='list-group-item item_koder'
            >
                ${namekoder}
            </li>
        `
    })

    let lista = document.querySelector('.lista')
    lista.innerHTML = listKoders*/

let koders = ['Antonio', 'Victor', 'Rose', 'Jorge', 'Yair', 'Ferdinand', 'Omar']
let listKoders = ''

koders.forEach((namekoder, index) => {
    listKoders += `
    <tr>
        <td>${index + 1}</td>
        <td>${namekoder}</td>
    </tr>
`
})

let tableKoders = document.querySelector("table tbody")
tableKoders.innerHTML = listkoders