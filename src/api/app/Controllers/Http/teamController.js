'use strict'

const ServicesTeam = use('App/Services/ServicesTeam')
const User = use('App/Models/User')

class teamController {
    async create({ request, response }) {
        try {
            const dataTeam = request.only(["captianId", "name", "color", "description"])
            await ServicesTeam.createTeam(dataTeam)
            response.status(201).send("Time criado com sucesso.")
        } catch (error) {   
            response.status(400).send({error, message: 'Não foi possivel criar o time, tente novamente.'})
        }
    }
}

module.exports = teamController;