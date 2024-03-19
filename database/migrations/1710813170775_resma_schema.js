'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResmaSchema extends Schema {
  up () {
    this.create('resmas', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.string('nameRequester', 255).notNullable()
      table.integer('IDRequester').notNullable()
      table.integer('resmaQTT').notNullable()
      table.string('baseRequester', 255).notNullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('resmas')
  }
}

module.exports = ResmaSchema
