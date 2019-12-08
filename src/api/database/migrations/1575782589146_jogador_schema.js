'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JogadorSchema extends Schema {
  up () {
    this.create('jogadores', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('jogadors')
  }
}

module.exports = JogadorSchema
