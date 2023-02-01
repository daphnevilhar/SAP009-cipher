import cipher from './cipher.js';

console.log(cipher);

const caixaTexto1 = document.querySelector("#caixaTexto1");
const caixaTexto2 = document.querySelector("#caixaTexto2");
const deslocamento = document.querySelector("#deslocamento");
const btnCriptografar = document.querySelector("#btnCriptografar");
const btnDescriptografar = document.querySelector("#btnDescriptografar");
const btnSair = document.querySelector("#sair");

btnCriptografar.addEventListener("click", function(){
    let mensagem = caixaTexto1.value;
    let offset = parseInt(deslocamento.value);
    caixaTexto2.value = cipher.encode(mensagem, offset);
})

btnDescriptografar.addEventListener("click", function(){
    let mensagem = caixaTexto1.value;
    let offset = parseInt(deslocamento.value);
    caixaTexto2.value = cipher.decode(mensagem, offset);
})

btnSair.addEventListener("click", function(){
    location.href = "index.html";
})