const order = require('../model/order')

class orderController {
    async register (req, res) {
        try{
            const data = await order.create(req.body)
            return res.json(data).status(201);
        }catch(err){
            res.status(404).send("Não foi possivel cadastrar o pedido, tente novamente!")
        }
    }
    async home (req, res) {
        try{
            const data = await order.find({ status: false})
            return res.json(data).status(302);
        }catch(err){
            res.status(404).send("Não foi possivel exibir os pedido, tente novamente!")
        }
    }
    async order (req, res) {
        try{
            const data = await order.findById(req.params.id).exec()
            return res.json(data).status(302);
        }catch(err){
            res.status(404).send("Não foi possivel exibir o pedido, tente novamente!")
        }
    }
    async orderDelivered (req, res) {
        try{
            const data = await order.find({status: true}).exec()
            return res.json(data).status(302);
        }catch(err){
            res.status(404).send("Não foi possivel exibir o pedido, tente novamente!")
        }
    }
    async orderUpdate (req, res) {
        try{
            const data = await order.findByIdAndUpdate(req.params.id, { 
                flavor: req.body.flavor,
                drink: req.body.drink,
                phone: req.body.phone,
                table: req.body.table,
                clientName: req.body.clientName,
                address: req.body.address
            })
            return res.json(data).status(202);
        }catch(err){
            res.status(404).send("Não foi possivel atualizar o pedido, tente novamente!")
        }
    }
    async orderStatus (req, res) {
        try{
            const data = await order.findByIdAndUpdate(req.params.id, { status: req.body.status })
            return res.json(data).status(202);
        }catch(err){
            res.status(404).send("Não foi possivel atualizar o pedido como entregue, tente novamente!")
        }
    }
    async orderDelete (req, res) {
        try{
            const data = await order.findByIdAndDelete(req.params.id)
            return res.json(data);
        }catch(err){
            res.status(404).send("Não foi possivel deletar o pedido, tente novamente!")
        }
    }
}

module.exports = new orderController();