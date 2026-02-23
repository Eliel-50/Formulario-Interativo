function mostrarCadastro() {

    document.getElementById("loginForm") .classList.remove("active");
    document.getElementById("cadastroForm") .classList.add("active");
}

function mostrarlogin() {

    document.getElementById("cadastroForm") .classList.remove("active");
    document.getElementById("loginForm") .classList.add("active");
}