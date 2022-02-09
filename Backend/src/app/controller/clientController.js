const client = require('../model/client')

class clientController {
    async register (req, res) {
        try{
            const data = await client.create(req.body)
            return res.json(data).status(201);
        }catch(err){
            res.status(404).send("Não foi possivel cadastrar o cliente, tente novamente!")
        }
    }
    async getAllClients (req, res) {
        try{
            const data = await client.find();
            return res.json(data).status(302);
        }catch(err){
            res.status(404).send("Não foi possivel exibir os clientes, tente novamente!")
        }
    }
    async getClientById (req, res) {
        try{
            const data = await client.findById(req.params.id).exec()
            return res.json(data).status(302);
        }catch(err){
            res.status(404).send("Não foi possivel exibir o cliente, tente novamente!")
        }
    }
    async clientUpdate (req, res) {
        try{
            const data = await client.findByIdAndUpdate(req.params.id, { 
                clientName: req.body.clientName,
                table: req.body.table,
                phone: req.body.phone,
                status: req.body.status,
                address: req.body.address
            })
            return res.json(data).status(202);
        }catch(err){
            res.status(404).send("Não foi possivel atualizar as informações cliente, tente novamente!")
        }
    }
    async clientDelete (req, res) {
        try{
            const data = await client.findByIdAndDelete(req.params.id)
            return res.json(data);
        }catch(err){
            res.status(404).send("Não foi possivel deletar o cliente, tente novamente!")
        }
    }
}

module.exports = new clientController();