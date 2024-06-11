/* En una tienda de venta de repuestos automotrices se tiene que el descuento depende del monto de venta total.
Se ingresa el monto de venta y el sistema debe calcular el descuento y restarlo del total segun las reglas:
- Si el monto es menor que 500 no hay descuento
- Si el monto está comprendido entre 500 y 1000 inclusive, el descuento es de 5%
- Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es del 11%
- Si el monto está comprendido entre 7000 y 15000 inclusive, el descuento es del 18%
- Si el monto es mayor de 15000 el desc es del 25%.
por ejemplo si se ingresa un monto de 5000 el descuento sera 550, y por tanto el valor a pagar sera 4450. */

//Datos de entrada: Monto de venta,
//Proceso: calcular el descuento y restarlo del del monto total
//Dato de salida: El descuento y monto final

let montoTotaldeVenta = parseInt(prompt('Ingrese el monto a pagar'))
if(montoTotaldeVenta >= 500 && montoTotaldeVenta <= 1000){
   let descuento = montoTotaldeVenta * 0.05;
   let montoCondescuento = montoTotaldeVenta - descuento;
   alert(`Su descuento es de ${descuento} el total a pagar seria ${montoCondescuento}`)
}
if(montoTotaldeVenta >= 1000 && montoTotaldeVenta <= 7000){
     descuento = montoTotaldeVenta * 0.11;
     montoCondescuento = montoTotaldeVenta - descuento;
    alert(`Su descuento es de ${descuento} el total a pagar seria ${montoCondescuento}`)
 }
 if(montoTotaldeVenta >= 7000 && montoTotaldeVenta <= 15000){
     descuento = montoTotaldeVenta * 0.18;
     montoCondescuento = montoTotaldeVenta - descuento;
    alert(`Su descuento es de ${descuento} el total a pagar seria ${montoCondescuento}`)
 }
 if(montoTotaldeVenta >= 15000){
     descuento = montoTotaldeVenta * 0.25;
     montoCondescuento = montoTotaldeVenta - descuento;
    alert(`Su descuento es de ${descuento} el total a pagar seria ${montoCondescuento}`)
 } else{
    alert(`No hay descuento, el monto total es de ${montoTotaldeVenta}`)
 }