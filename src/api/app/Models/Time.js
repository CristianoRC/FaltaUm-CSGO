'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Time extends Model {
    user () {
        return this.hasOne('app/Models/User')
      }
      jogador () {
        return this.belongsTo('app/Models/Jogador')
      }
    
}

module.exports = Time
