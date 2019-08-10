'use strict'
const Usuario = use("App/Models/User")


class ServicosUsuario {
    async criarUsuario(usuario) {
        if (!usuario.username)
            throw "Insira o nome do usuário";

        if (!usuario.email)
            throw "Insira o email do usuário";

        if (!usuario.password)
            throw "Insira a senha do usuário";

        return await Usuario.create(usuario)
    }
}

module.exports = new ServicosUsuario();
