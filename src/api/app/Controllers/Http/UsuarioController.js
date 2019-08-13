'use strict'
const ServicosUsuario = use("App/Servicos/ServicosUsuario")
const Usuario = use("App/Models/User")

class UsuarioController {
    async criar({ request, response }) {
        try {
            const dadosDoUsuario = request.only(["username", "email", "password"]);

            return await ServicosUsuario.criarUsuario(dadosDoUsuario);
        } catch (error) {
            if (error.errno === 19)
                response.status(400).send("Email ou username já cadastrado");
            else
                response.status(400).send(error);
        }
    }

    async listarTodos() {
        return await Usuario.all();
    }

    async obterUsuario({ response, params }) {
        const resultado = await Usuario.findBy('id', params.id);
        if (resultado === null) {
            response.status(400).send("ID não encontrado.");
        } else {
            return resultado;
        }
    };
}

module.exports = UsuarioController;
