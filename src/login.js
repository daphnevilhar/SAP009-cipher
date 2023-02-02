document.getElementById("entrar").addEventListener("click", logar)

function logar(e){
  e.preventDefault()
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  if(login === "admin" && senha === "admin"){
    alert("Sucesso");
    location.href = "index2.html";
  }else{
    alert("Usuario ou senha incorretos");
  }

}