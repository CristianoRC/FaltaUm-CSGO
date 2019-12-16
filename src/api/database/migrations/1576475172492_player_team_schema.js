'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayerTeamSchema extends Schema {
  up () {
    this.create('player_teams', (table) => {
      table.increments()
      table.string('team_id').unsigned()
      table.string('player_id').unsigned()
      table.foreign('team_id').references('id').inTable('teams').onDelete('cascade')
      table.foreign('player_id').references('id').inTable('users').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('player_teams')
  }
}

module.exports = PlayerTeamSchema
