const prompt = require('prompt-sync')()

let numerouno= prompt("Ingrese primer número para ejecutar función: ");
console.log(`${numerouno}`);
numerouno=parseInt(numerouno)

let numerodos= prompt("Ingrese segundo número para ejecutar función: ");
console.log(`${numerodos}`);
numerodos=parseInt(numerodos)

//funciones operaciones básicas


function sumar (a,b){
   return `El resultado para la suma es:  ${a+b}`
}


function restar (a,b){
    return `El resultado para la resta es:  ${a-b}`
 }

 function multiplicar (a,b){
    return  `El resultado para la multiplicación es: ${a*b}`
 }

 function dividir (a,b){
    return  `El resultado para la división es: ${a/b}`
 }

 function dividirpasando (a,b){
   return  `El resultado para la divisionpasando es: ${a%b}`
}

/*TesteoCalculadora*/

/* sumar (numerouno,numerodos)
restar (numerouno,numerodos)
multiplicar (numerouno,numerodos)
dividir (numerouno,numerodos)
dividirpasando (numerouno,numerodos)
 */

console.log (sumar(numerouno,numerodos));
console.log(restar (numerouno,numerodos));
console.log(multiplicar (numerouno,numerodos));
console.log(dividir (numerouno,numerodos));
console.log(dividirpasando (numerouno,numerodos));

//calculadora parte III

function cuadradoDeUnNumero (numero){
   return numero*numero
}

function promediodoDetresNumeros (x,y,z){
   return (x+y+z) /3
}

function calcularPorcentaje (numeroTotal,porcentaje) {
   return numeroTotal*porcentaje/100
}

function generadorDePorcentaje (indicadorporcentaje,numeroTotal) {
   return (indicadorporcentaje/numeroTotal) *100
}

console.log(cuadradoDeUnNumero(10));
console.log (promediodoDetresNumeros (10,20,30))
console.log (calcularPorcentaje(300,15))
console.log(generadorDePorcentaje (2,200));