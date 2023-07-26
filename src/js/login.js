const form = document.querySelector("#form");
form.addEventListener("submit", (e) => validarLogin(e));

function validarLogin(e) {
  e.preventDefault();
  const login = document.querySelector('#login').value
  const senha = document.querySelector('#senha').value

  const usuarios = JSON.parse(dados);

  const [userAuth] = usuarios.filter(usuario => usuario.email == login)

  if(!userAuth) {
    alert('Não existe usuário cadastrado com esse e-mail.')
    return
  }

  if(userAuth.senha != senha) {
    alert('A senha digitada não está correta.')
    return
  }

  localStorage.setItem("usuario_logado", JSON.stringify({login: userAuth.email, senha: userAuth.senha}))

  location.href = '/index.html'
}