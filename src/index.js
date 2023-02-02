import cipher from './cipher.js';

const caixaTexto1 = document.querySelector("#caixaTexto1");
const caixaTexto2 = document.querySelector("#caixaTexto2");
const deslocamento = document.querySelector("#deslocamento");
const btnCriptografar = document.querySelector("#btnCriptografar");
const btnDescriptografar = document.querySelector("#btnDescriptografar");
const btnSair = document.querySelector("#sair");

btnCriptografar.addEventListener("click", function(){
  const mensagem = (caixaTexto1.value);
  const mensagemFinal = mensagem.toUpperCase();
  const offset = parseInt(deslocamento.value);
  caixaTexto2.value = cipher.encode(mensagemFinal, offset);
})

btnDescriptografar.addEventListener("click", function(){
  const mensagem = (caixaTexto1.value);
  const mensagemFinal = mensagem.toUpperCase();
  const offset = parseInt(deslocamento.value);
  caixaTexto2.value = cipher.decode(mensagemFinal, offset);
})

btnSair.addEventListener("click", function(){
  location.href = "index.html";
})