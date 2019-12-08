'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JogadorTimeSchema extends Schema {
  up () {
    this.create('jogador_times', (table) => {
      table.string('dono').notNullable().unique()
      table.string('jogadores').notNullable()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('jogador_times')
  }
}

module.exports = JogadorTimeSchema
