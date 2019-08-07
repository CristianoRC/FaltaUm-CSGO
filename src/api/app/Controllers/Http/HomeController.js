'use strict'

class HomeController {
    index({ request, response }) {
        response.send({ Mensagem: "Olá Mundo!" })
    }
}

module.exports = HomeController
