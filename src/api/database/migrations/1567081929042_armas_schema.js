'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArmasSchema extends Schema {
  up () {
    this.create('armas', (table) => {
      table.increments()
      table.string('nome', 255).notNullable().unique()
      table.text('descricao')
      table.string('equipe')
      table.string('imagem')
      table.timestamps()
    })
  }

  down () {
    this.drop('armas')
  }
}

module.exports = ArmasSchema
