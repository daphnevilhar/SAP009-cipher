import cipher from './cipher.js';

console.log(cipher);

function criptografar(){
    var input = document.getElementById("textBox1").value.toUpperCase()
    var resultado = ""

    for(var i = 0 ; i < input.length ; i++){  //Vai passar lendo cada caractere do input
    
    var posicaoDaLetra = input.charCodeAt(i)-64;//Identifica qual letra é o alfabeto
    var deslocamento = (posicaoDaLetra + key) % 26; //Deslocamento mantendo dentro do alfabeto
    
    deslocamento = deslocamento == 0 ? 26 : deslocamento; // MOD retornar 0 caso o resuktado seja 26
    resultado = value[deslocamento-1]; //Faz -1 porque a letra 1 A esta no indicice 0 do teu array

    }

    document.getElementById("textBox2").innerHTML = resultado

}
document.getElementById("entrar").addEventListener("click", logar)

function logar(e){
    e.preventDefault()
    console.log("oi")
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin" && senha == "admin"){
        alert("Sucesso");
        location.href = "index2.html";
    }else{
        alert("Usuario ou senha incorretos");
    }

}
