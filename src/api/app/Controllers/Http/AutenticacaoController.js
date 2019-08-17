'use strict'
const ServicosAutenticacao = use("App/Servicos/ServicosAutenticacao")


class AutenticacaoController {
    async logar({ request, auth }) {
        const { email, senha } = request.all()
        return ServicosAutenticacao.logar(email, senha, auth);
    }

    async atualizarToken({ request, auth }) {
        const { refreshToken } = request.all();

        return await ServicosAutenticacao.atualizarToken(refreshToken, auth)
    }
}

module.exports = AutenticacaoController
