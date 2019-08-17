'use strict'
const ServicosUsuario = use("App/Servicos/Servicos/ServicosUsuarios");
const Usuario = use("App/Models/User");
const ObterUsuario = use("App/Http/UsuarioController");



async EditaDados({ request, response }) {
  try {
    const DadosAlterados = request.only[("username", "password", "email")];

    return await EditaDados.alterarDadosUsuario(DadosAlterados);

  } catch (error) {
    if (error.errno === 19)
      response.status(400).send("Email ou username existentes");
    else
      response.status(400).send(error);
  }
}
/*teste*/

module.exports = TestaDados;