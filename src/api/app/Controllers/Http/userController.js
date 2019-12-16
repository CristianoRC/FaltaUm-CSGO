'use strict'
const ServicesUser = use("App/Services/ServicesUser")
const User = use("App/Models/User")

class UserController {
    async criar({ request, response }) {
        try {
            const dataUser = request.only(["username", "email", "password"]);

            return await ServicesUser.criarUsuario(dataUser);
        } catch (error) {
            if (error.errno === 19)
                response.status(400).send("Email ou username já cadastrado");
            else
                response.status(400).send(error);
        }
    }

    async listarTodos() {
        return await User.all();
    }

    async obterUsuario({ response, params }) {
        try {
            return await servicesUser.ObterUsuario({ id: params.id });
        } catch (error) {
            response.status(400).send(error);
        }
    }

    async AlterarDados({ request, response, params }) {
        try {
            const { username, email } = request.all();
            return await servicesUser.EditarDados({ username, email, id: params.id });
        } catch (error) {
            response.status(401).send(error);
        }
    }
}

module.exports = UserController;
