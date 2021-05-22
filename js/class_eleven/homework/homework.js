/**
 * Ejercicio 1
 * Dado el siguiente array de objetos generar
 * Funcion que pinte mi lista de deseos
 * Funcion que ordene por id mi lista de deseos
 * Funcion que ordene por nombre de producto mi lista de deseos
 * Funcion que ordene por precio mi lista de deseos
 */
console.log('Lista de deseos')

let WishList = [{
        iditem: 1,
        name: 'Adidas Grand Court',
        description: 'Adidas Grand Court Base EE7905 Tenis para Hombre',
        price: 859,
        imgurl: 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
    },
    {
        iditem: 2,
        name: 'Nike Metcon',
        description: 'Nike Metcon Sport Aq7489-008 - Zapatillas deportivas para hombre',
        price: 990,
        imgurl: 'https://www.amazon.com.mx/images/I/71dLLLfSfUL._AC_SY695_.jpg'
    },
    {
        iditem: 3,
        name: 'Nike Carreras',
        description: 'Nike Carreras de mujer',
        price: 1200,
        imgurl: 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
    }
]

let wishListObj = ''
WishList.forEach((list, index) => {
    let { iditem, name, description, price, imgurl } = list
    wishListObj += `
        <tr>
            <td scope="row">${iditem}</td>
            <td>${name}</td>
            <td>${description}</td>
            <td>${price}</td>
            <td>${imgurl}</td>
        </tr>
    `
})

let tbodyWishListObj = document.querySelector('.table_wish_list tbody')
tbodyWishListObj.innerHTML = wishListObj

wishList.sort((a, b) => b.iditem - a.iditem)