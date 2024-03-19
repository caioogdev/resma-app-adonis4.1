'use strict'

const User = use('App/Models/User')

class UserController {
    async getUsers({ response }) {

        try {
          const users = await User.query().select('nameUser', 'emailUser').fetch()
          return response.json(users)

        } catch (error) {
          return response.status(500).json({ error: 'Erro ao buscar usuários' })

        }

      }

    async registerUsers({ request,response }) {

      try{
        const userData = request.only(['nameUser','pwdUser','emailUser','IDUser'])
        const user = await User.create(userData)
        return response.status(201).json({message: "Usuário criado com sucesso"})

      } catch (error){
        return response.status(500).json({error: 'Erro ao registrar usuário'})

      }

    }

    
      
}

module.exports = UserController
