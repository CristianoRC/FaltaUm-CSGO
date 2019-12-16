'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LogoSchema extends Schema {
  up () {
    this.create('logos', (table) => {
      table.increments()
      table.string('path', 255).notNullable()
      table.integer('size').unsigned()
      table.string('original_name', 100)
      table.string('extension', 10)
      table.integer('team_id').unsigned()
      table.foreign('team_id').references('id').inTable('teams').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('logos')
  }
}

module.exports = LogoSchema
