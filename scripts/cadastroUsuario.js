let dadosUsuarios = JSON.parse(dados)
const form = document.querySelector('#form')

form.addEventListener('submit', cadastroUsuario)

function cadastroUsuario(e) {
  e.preventDefault();

  const nome = document.querySelector('#nome').value;
  const login = document.querySelector('#login').value;
  const senha = document.querySelector('#senha').value;
  
  const [verificaEmail] = dadosUsuarios.filter(usuario => usuario.email == login)

  if (verificaEmail && verificaEmail.email.length) {
    console.log(verificaEmail)
    alert('O email digitado já está vinculado a uma conta.')
    return
  }

  dadosUsuarios.push({
    email: login,
    nome: nome,
    senha: senha
  })

  dados = JSON.stringify(dadosUsuarios)
}
