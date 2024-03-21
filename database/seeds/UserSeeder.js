'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User') 

class UserSeeder {
  async run () {
    await User.create({
      nameUser: 'Caio Oliveira',
      pwdUser: 'Segov@Segov', 
      emailUser: 'fc_caio@pm.rj.gov.br',
      IDUser: '5143763-5' 
    })
  }
}

module.exports = UserSeeder
