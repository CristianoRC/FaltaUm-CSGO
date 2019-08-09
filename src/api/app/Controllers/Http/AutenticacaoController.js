'use strict'

class AutenticacaoController {
    async logar({ request, auth }) {
        const { email, senha } = request.all()

        const token = await auth.withRefreshToken()
            .attempt(email, senha)

        return token;
    }

    async atualizarToken({ request, auth }) {
        const { refreshToken } = request.all();
        return await auth.generateForRefreshToken(refreshToken);
    }
}

module.exports = AutenticacaoController
