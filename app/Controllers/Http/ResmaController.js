'use strict'
const Resma = use('App/Models/Resma')

class ResmaController {

    //registrar resma
    async registerResma({ request, response, auth }){
        try {

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

    //Listar resmas cadastradas
    async showResmas({ response }){
        try {
            const resmas =await Resma.query().with('user').fetch()

            return response.json(resmas)

        } catch (error) {
            return response.status(500).json({error: "Errp ao buscar resmas"})
        }
    }

     //Buscar resma por ID
     async showResma({ params, response }) {
        try {
            const { id } = params;
            const resma = await Resma.find(id);

            if (!resma) {
                return response.status(404).json({ error: "Resma não encontrada" });
            }

            return response.json(resma);

        } catch (error) {
            return response.status(500).json({ error: "Erro ao buscar resma" });
        }
    }

    //Excluir resma por ID
    async delResma({ params, response }) {
        try {
            const { id } = params;
            const resma = await Resma.find(id);

            if (!resma) {
                return response.status(404).json({ error: "Resma não encontrada" });
            }

            await resma.delete();
            return response.json({ message: "Resma excluída com sucesso" });

        } catch (error) {
            return response.status(500).json({ error: "Erro ao excluir resma" });
        }
    }
}

module.exports = ResmaController
