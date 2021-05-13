/**
 * Convertidor de temperatura
 * Generar una función, que reciba (grados, entrada, salída ) 
 * Default es ºC a ºF
 * p.ej. (100,c,f) -> 100 ºC a ºF -> Default
 * p.ej. (100,f,c) -> 100 ºF a ºC
 * C to F -> (celsius*9)/5 + 32
 * F to C -> ((fahrenheit - 32)*5)*/


/*function celsiusToF(temp, initial, finish) {

    let temp = ''
    initial = C
    finish = F
    if {
        temp = (celsius * 9) / 5 + 32
        console.log(`La temperatura en ${temp}`)

    }*/
/**
 * Ejercicio
 * Simular el funcionamiento de un cajero
 * 
 * considerar estas accciones
 * 1. Retiro de efectivo (cantidad)
 * 2. Depósito (cantidad)
 * 3. Consulta de saldo () 
 * 4. Traspasar (cuenta, cantidad)
 * 
 * Datos iniciales
 * Saldo inicial: $2000
 * Consultas de saldo = 2000
 * Depositos = 0
 * Retiros = 0
 * 
 * 
 * Pasos a ejecutar
 * 1. Depositar 2000
 * 2. Retirar 450
 * 3. Consultar saldo
 * 4. Retirar 400
 * 5. Consultar saldo
 * 6. Transferir 500 pesos a la cuenta 1234
 */

let balance = 2000
let countGetBalance = 0
let countSetDeposits = 0
let countWithdrawCash = 0

function withdrawCash(amount) {
   if(amount < balance){
      balance =  balance - amount
      countWithdrawCash++
      console.log(`Toma tu dinero: $${amount}`)
   } else {
      console.warn('Saldo insuficiente!')
   }
}

const getBalance = function() {
   countGetBalance++
   return `Tu saldo actual es de $${balance}`
}

function setDeposits(amount) {
   if(amount > 0){
      balance =  balance + amount
      countSetDeposits++
      return `Tu saldo ahora es de $${balance}`
   } else {
      console.warn('Inserte una cantidad mayor a 0')
   }
}

function transferCash(account, amount){
   if(amount <= balance) {
      balance = balance - amount
      countWithdrawCash++
      console.log(`Dinero transferido a ${account} : $${amount}`)
      console.log(`Tu saldo actual es de $${balance}`)
   } else {
      console.warn('Saldo insuficiente!, intenta con otra cantidad')
   }
}


function withdrawCash(amount) {
   if(amount < balance){
      balance =  balance - amount
      countWithdrawCash++
      console.log(`Toma tu dinero: $${amount}`)
   } else {
      console.warn('Saldo insuficiente!')
   }
}
 const= withdrawCash(amount)=> {
      if(amount < balance){balance =  balance - amount countWithdrawCash++
      console.log(`Toma tu dinero: $${amount}`)}else{
          
      }

