const h1 = document.querySelector('h1');
const form =document.querySelector('#form')
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btn = document.querySelector('#btn-calcular');
const resultado = document.querySelector('#resultado');

btn.addEventListener("click", Calcular);

function Calcular() {
    let suma = input1.value + input2.value;
    resultado.innerHTML = "resultado: " + suma; 
}