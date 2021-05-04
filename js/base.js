console.log('Hola Mundo')
/*
	Ejercicio 1:
	Pedir 2 variables por prompt
	Si a > b dividir a entre b
	Si a < b dividir sumar a más b
	si a == b multiplicar ambos numeros
	Imprimir el resultado en consola
*/
/***
	Pedir por el promt un numero, y comprobar si es par o impar
*/

const numberOne = parseInt(window.prompt("Cual es la primer variable a"))
console.log( typeof numberOne)
const numberTwo = parseInt( window.prompt("Cual es la primer variable b"))
let result = 
if (numberOne > numberTwo){
result = NumerOne / numberTwo
}else if( numberOne < numberTwo){
  result = numberOne + numberTwo
}else{
  result= numberOne * numerTwo
}

const parOImpar = parseInt( window.prompt("Dame un numero"))
console.log(parOImpar)
if(parOImpar % 2 === 0){
  console.log(`el nmero ${parOImpar} es par`)
}else{
  console.log(`el numero ${parOImpar} es impar`)
}