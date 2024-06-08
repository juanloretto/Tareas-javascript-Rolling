//Ejercicios de String y Números

/* 1 - Crea una variable con tu nombre, otra con tu apellido y concaténalas con el mensaje de bienvenida: 'Bienvenido al evento' usando template string.
 */
let nombre = 'Juan'
let apellido = 'Loretto'
console.log(`${nombre} ${apellido} Bienvenido al evento`)

/* 2 - Usando métodos de String quita los espacios de adelante y de atrás del siguiente texto: '              Había una vez un pequeño programador junior       ' */

let frase = '              Había una vez un pequeño programador junior       '
let fraseSinEspacios = frase.trim()
console.log(fraseSinEspacios)

/* 3 - Convierte a mayúsculas tu nombre y apellido usando las variables definidas en el punto 1 */
console.log(nombre.toUpperCase(), apellido.toUpperCase())
 
/* 4 - Crea un programita que le pida al usuario que ingrese un texto, convierte dicho texto en mayúsculas y muestra en consola cuantos caracteres tiene el texto recibido usando propiedades de los String. */
let programita=prompt('ingrese un texto')
console.log(programita.toUpperCase(), programita.length)

/* 5 - Crea un programa que solicite al usuario ingresar un número con 5 decimales, almacenar dicho número en una variable asegurándose que sea de tipo number. Mostrar en consola lo siguiente:
- El número redondeado a su mayor valor
- El número redondeado a su menor valor
- El número original multiplicado por 3
- El resto del número dividido por 2 */
let numero = prompt('Ingrese un numero con 5 decimales')

parseInt(numero)
console.log(Math.ceil(numero))
console.log(Math.floor(numero))
console.log(numero*3)
console.log(numero%2)
  