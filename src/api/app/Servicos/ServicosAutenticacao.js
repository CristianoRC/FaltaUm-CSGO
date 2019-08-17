class ServicoAutenticacao {
  async logar(email, senha, autenticador) {
    return await autenticador.withRefreshToken()
      .attempt(email, senha, {
        email: email,
      })
  }

  async atualizarToken(refreshToken, autenticador) {
    return await autenticador.generateForRefreshToken(refreshToken);
  }

  async obterInformacoesDoUsuario(autenticador) {
    return await autenticador.getUser();
  }

}

module.exports = new ServicoAutenticacao();