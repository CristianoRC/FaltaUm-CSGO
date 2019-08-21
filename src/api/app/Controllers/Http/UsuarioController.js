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
        try {
            return await ServicosUsuario.UsuarioObtido({ id: params.id });
        } catch (error) {
            response.status(400).send('Id não encontrado');
        }
    }

    async AlterarDados({ request, response, params }) {
        try {
            const { username, email } = request.all();
            return await ServicosUsuario.EditarDados({ username, email, id: params.id });
        } catch (error) {
            response.status(401).send(error);
        }
    }
}

module.exports = UsuarioController;
