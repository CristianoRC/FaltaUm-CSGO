'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class JogadorTime extends Model {
    user () {
        return this.hasOne('app/Models/User')
    }
    time () {
        return this.hasOne('app/Models/Time')  
    }
}

module.exports = JogadorTime
