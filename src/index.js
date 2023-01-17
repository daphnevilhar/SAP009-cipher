import cipher from './cipher.js';

console.log(cipher);

var caixaDeTexto1 = "";
    function resultado(){
        caixaDeTexto1 = document.getElementById("encryptBox").value;
        document.getElementById("answer").innerHTML = caixaDeTexto1
    }

    function logar(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
    }else{
        alert('Usuário ou senha incorretos');
    }
}
