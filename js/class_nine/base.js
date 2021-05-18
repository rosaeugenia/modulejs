< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > Objetos < /title> <
    /head>

<
body >
    <!--<script src="base.js"></script>-->
    <
    script src = "homework.js" > < /script> <
    /body>

<
/html>

let pedido = [{
    entrada: 'ensalada de pepinos',
    principal: 'paella',
    postre: 'platano',
    precio: 100
}, {
    entrada: 'ensalada de tomates',
    principal: 'pescado',
    postre: 'helado',
    precio: 120
}, {
    entrada: 'ensalada simple',
    principal: 'paella',
    postre: 'yogurt',
    precio: 80
}, {
    entrada: 'ensalada cesar',
    principal: 'salmón',
    postre: 'platano',
    precio: 100
}]
pedidos.forEach((value, index, arr) => {
    console.log(value)
})