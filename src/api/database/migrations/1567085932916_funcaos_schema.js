'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncaosSchema extends Schema {
  up () {
    this.create('funcaos', (table) => {
      table.increments()
      table.string('nome', 255).notNullable().unique()
      table.text('descricao')
      table.string('imagem')
      table.timestamps()
    })
  }

  down () {
    this.drop('funcaos')
  }
}

module.exports = FuncaosSchema
