'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TimeSchema extends Schema {
  up () {
    this.create('times', (table) => {
      table.increments()
      table.string('logo', 100).notNullable()
      table.string('nome', 60).notNullable().unique()
      table.string('cor', 50)
      table.string('dono', 60).notNullable().unique()
      table.timestamps()
    })
   
  }
  
  down () {
    this.drop('times')
  }
}

module.exports = TimeSchema
