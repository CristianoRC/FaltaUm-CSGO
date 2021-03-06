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
    async EditarDados(usuario) {
        if (!usuario.id && usuario.id !== 0)
            throw "Id não existe"
        if (!usuario.username)
            throw "Insira o nome do usuário"
        if (!usuario.email)
            throw "Insira o email do usuário"


        const usuarioEditado = await Usuario.findBy('id', usuario.id)
        usuarioEditado.merge({ username: usuario.username, email: usuario.email })

        await usuarioEditado.save()

        return usuarioEditado
    }

    async ObterUsuario(usuario) {
        const usuarioObtido = await Usuario.findBy('id', usuario.id);
        
        if (usuarioObtido === null)
            throw 'Id inexistente'

        return usuarioObtido;
    }

}

module.exports = new ServicosUsuario();
