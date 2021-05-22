let koders = ['antonio', 'victor', 'rose', 'jorge']
let kodersObject = [{
        name: 'jorge',
        lastName: 'camarillo',
        age: 30,
        github: '@dered-dev'
    },
    {
        name: 'jorge',
        lastName: 'camarillo',
        age: 30,
        github: '@dered-dev'
    },
    {
        name: 'jorge',
        lastName: 'camarillo',
        age: 30,
        github: '@dered-dev'
    }
]

let lista = document.querySelector('.lista')
let koders = ['antonio', 'victor', 'rose', 'jorge']
let listKoders = ''
koders.forEach((namekoder, index) => {
    listKoders += `
        <li 
            id="koder${index + 1}"
            key='koder_${index}'
            class='item_koder'
        >
            ${namekoder}
        </li>
    `
})
lista.innerHTML = listKoders

let obj = {
    name: 'jorge',
    lastName: 'camarillo',
    age: 30,
    github: '@dered-dev'
}
let { name, lastName } = obj