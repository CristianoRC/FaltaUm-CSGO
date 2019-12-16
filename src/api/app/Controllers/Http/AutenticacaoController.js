'use strict'
const servicesAuth = use("App/Servicos/ServicosAutenticacao")


class AutenticacaoController {
    async logar({ request, auth }) {
        const { email, senha } = request.all()
        return servicesAuth.logar(email, senha, auth);
    }

    async atualizarToken({ request, auth }) {
        const { refreshToken } = request.all();

        return await servicesAuth.atualizarToken(refreshToken, auth)
    }
}

module.exports = AuthController
