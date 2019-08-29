'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MapasSchema extends Schema {
  up () {
    this.create('mapas', (table) => {
      table.increments()
      table.string('nome', 255).notNullable().unique()
      table.text('descricao')
      table.string('imagem')
      table.timestamps()
    })
  }

  down () {
    this.drop('mapas')
  }
}

module.exports = MapasSchema
