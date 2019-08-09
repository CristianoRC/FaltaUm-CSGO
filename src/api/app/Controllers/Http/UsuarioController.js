'use strict'
const Usuario = use("App/Models/User")

class UsuarioController {
    async criar({ request, response }) {
        try {
            const data = request.only(["username", "email", "password"])
            const userCreated = await Usuario.create(data)
            return userCreated;

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
}

module.exports = UsuarioController
