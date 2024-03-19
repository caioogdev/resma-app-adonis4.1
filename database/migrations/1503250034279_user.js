'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('id')
      table.string('nameUser', 255).notNullable()
      table.string('pwdUser', 255).notNullable()
      table.string('emailUser', 255).unique().notNullable()
      table.string('IDUser', 255).unique().notNullable()
      table.boolean('statusUser').notNullable().defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
