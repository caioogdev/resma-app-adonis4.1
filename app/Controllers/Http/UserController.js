"use strict";
const User = use("App/Models/User");

class UserController {

  //registrar usuário
  async registerUsers({ request, response }) {

    try {
      const userData = request.only([
        "nameUser",
        "pwdUser",
        "emailUser",
        "IDUser",
      ]);
      const user = await User.create(userData);

      return response
        .status(201)
        .json({ message: "Usuário criado com sucesso" });

    } catch (error) {

      return response.status(500).json({ error: "Erro ao registrar usuário" });
    }
  }

  //buscar todos os usuários
  async showUsers({ response }) {

    try {
      const users = await User.query().select("id","nameUser", "emailUser","IDUser","created_at").fetch();

      return response.json(users);

    } catch (error) {
      return response.status(500).json({ error: "Erro ao buscar usuários" });
    }
  }

  //buscar usuário por ID
  async showUser({ params, response }) {
    try {
      const { id } = params;
      const user = await User.find(id);

      if (!user) {
        return response.status(404).json({ error: "Usuário não encontrado" });
      }

      return response.json(user);

    } catch (error) {
      return response.status(500).json({ error: "Erro ao buscao usuário" });
    }
  }

  //editar usuário
  async editUser({ params, request, response }) {
    try {

      const { id } = params;
      const user = await User.find(id);

      if (!user) {
        return response.status(404).json({ error: "Usuário não encontrado" });
      }

      const userData = request.only(["nameUser", "emailUser", "password"]); 
      user.merge(userData);
      await user.save();
      return response.json(user);

    } catch (error) {
      return response.status(500).json({ error: "Erro ao editar usuário" });
    }
  }

  //excluir usuário
  async delUser({ params, response }){

    try {
      const { id } = params;
      const user = await User.find(id);

      if (!user){
        return response.status(404).json({erro: "Usuário nao encontrado"})
      }

      await user.delete();
      return response.json({message: "Usuário excluido com sucesso"})

    } catch (error) {
      return response.status(500).json({error: "Erro ao excluir usuário"})
    }

  }

  //login de usuário
  async loginUser ({ request,response,auth }){
    try {
      const { emailUser, pwdUser } = request.all();
      const token = await auth.attempt(emailUser,pwdUser);
      return token;

    } catch (error) {
      return response.status(500).send({error: error})
      
    }
  }


}

module.exports = UserController;
