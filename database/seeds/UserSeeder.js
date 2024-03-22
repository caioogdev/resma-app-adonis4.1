'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User') 

class UserSeeder {
  async run () {
    await User.create({
      nameUser: 'Usuario Teste',
      pwdUser: 'senha12345', 
      emailUser: 'teste@gmail.com',
      IDUser: '12345678' 
    })
  }
}

module.exports = UserSeeder
