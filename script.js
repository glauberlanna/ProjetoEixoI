function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "pedrohenrique@gmail.com" && senha == "12345"){
        alert('Sucesso');
        location.href = "indexPedroHenrique.html";
    }
    else{
        alert('Usuario ou senha invalidos');
    }

}

function registrar() {
    alert("Usuário registrado com Sucesso!");
    location.href = "indexPedroHenrique.html";
}