'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamSchema extends Schema {
  up () {
    this.create('teams', (table) => {
      table.increments()
      table.string('captain_id').unsigned()
      table.string('name', 70).notNullable()
      table.string('color', 60).notNullable()
      table.string('description', 200).notNullable()
      table.foreign('captain_id').references('id').inTable('users').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('teams')
  }
}

module.exports = TeamSchema
