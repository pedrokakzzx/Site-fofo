console.log("LOADING>>>><<")

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'yanna' && password === '23062010') {
        document.getElementById('sucess-message').innerText = "Logado com sucesso"
        window.location.href = 'site.html';
        setTimeout(function(){
            document.getElementById('sucess-message').innerText = "";
        }, 3000);
    } else {
        document.getElementById('error-message').innerText = "Obs: o usuario é seu nome tudo minusculo e a senha é seu aniversario completo sem nenhum barra";
        setTimeout(function(){
            document.getElementById('error-message').innerText = "";            
        }, 5000);
    }
}