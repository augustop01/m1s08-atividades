function authUser () {
  const dadosUsuario = JSON.parse(  localStorage.getItem("dados_usuario"))

  if (!dadosUsuario) {
    location.href = "/login.html";
  }
}

authUser();