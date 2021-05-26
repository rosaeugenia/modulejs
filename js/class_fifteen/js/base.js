console.log('BOM')

// DOM -> Document Object Model
// BOM -> Browser Object Model

// window
//     document // DOM

//     location // Bom
//     navigator // Bom
//     history // Bom

/*let koders = [{
        id: 1,
        bio: 'lorem lorem lorem lorem',
        git: '/dered-dev',
        name: 'Jorge',
        imgkoder: 'https://placeimg.com/640/480/people'
    },
    {
        id: 2,
        bio: 'lorem lorem lorem lorem',
        git: '/rose-dev',
        name: 'Rose',
        imgkoder: 'https://placeimg.com/640/480/people'
    }
]*/


if (
    window.location.pathname === "/" ||
    window.location.pathname === "https://python2grose-default-rtdb.firebaseio.com/koders/.json"
) {

    let acc = ''
    koders.forEach(koder => {
        acc += `
            <li class="list-group-item d-flex justify-content-between">
                <span class="pr-4">${koder.name}</span>
                <div class="group__actions">
                    <a class="btn btn-primary" 
                        href="/koder.html?idkoder=${koder.id}" 
                        target="_self">Eliminar</a>
                    
                </div>
            </li>
        `
    });
    let list__koders = document.querySelector('.list__koders')
    list__koders.innerHTML = acc

}



if (
    window.location.pathname === "https://python2grose-default-rtdb.firebaseio.com/koders/.json"
) {
    let search = window.location.search
    let start = search.indexOf('=') + 1
    let idkoder = parseInt(search.slice(start))


    let koderObject = koders.filter((koder) => {
        if (koder.id === idkoder) {
            return koder
        }

    })[0]
    console.log(koderObject)

    const printKoder = (objkoder) => {
        let { name, lastName, age, position } = objkoder
        document.querySelector('.card-img-top').setAttribute('src', imgkoder)
        document.querySelector('.card-title').innerText = `${id} : ${name}`
        document.querySelector('.card-text').innerText = bio
        document.querySelector('.btn-primary').innerText = git
        document.querySelector('.btn-primary').setAttribute('href', `https://github.com${git}`)
        document.querySelector('.btn-primary').setAttribute('target', '_blank')
    }

    if (koderObject !== undefined) {
        printKoder(koderObject)
    }
}