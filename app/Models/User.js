'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.pwdUser) {
        userInstance.pwdUser = await Hash.make(userInstance.pwdUser)
      }
    })
  }

  static get hidden() {
    return ['pwdUser'] 
  }

  static get visible() {
    return ['id','nameUser', 'emailUser','IDUser'] 
  }
}

module.exports = User
