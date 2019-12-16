'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PlayerTeam extends Model {
    team(){
        return this.hasMany('App/Models/Team')
    }
    user(){
        return this.hasMany('App/Models/User')
    }
}


module.exports = PlayerTeam
