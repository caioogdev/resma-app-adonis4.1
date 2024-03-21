'use strict'
const Resma = use('App/Models/Resma')

class ResmaController {

    //registrar resma
    async registerResma({ request, response, auth }){
        try {
            if (!auth.user){
                return response.status(401).json({error: "Usuário não autenticado"})
            }

            const resmaData = request.only([
                'nameRequester',
                'IDRequester',
                'baseRequester',
                'resmaQTT'
            ])
            resmaData.user_id = auth.user.id 
            const resma = await Resma.create(resmaData)

            return response.status(201).json({message: "Solicatação de resma cadastrada com sucesso"})

        } catch (error) {
            return response.status(500).json({error: "Erro ao cadastrar solicitação de resma."})
        }
    }
}

module.exports = ResmaController
