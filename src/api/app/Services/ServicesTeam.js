'use strict'

const user = use('App/Models/User')
const Team = use('App/Models/Team')

class ServicesTeam {
    async createTeam(team) {
        if (!team.name) {
            throw "Insira o nome do time."
        }
        if (!team.color) {
            throw "Escolha a cor do seu time"
        }
       return await Team.create(team)
    }
}

module.exports = new ServicesTeam();
