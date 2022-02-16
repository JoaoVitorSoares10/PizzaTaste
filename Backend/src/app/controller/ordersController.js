const Orders = require('../model/Orders')

class OrdersController {
    async register (req, res) {
        try{
            const data = await Orders.create(req.body)
            return res.json(data).status(201);
        }catch(err){
            res.status(404).send("Não foi possivel cadastrar o pedido, tente novamente!")
        }
    }
    async getAllOrders (req, res) {
        try{
            const data = await Orders.find();
            return res.json(data).status(302);
        }catch(err){
            res.status(404).send("Não foi possivel exibir os pedidos, tente novamente!")
        }
    }
    async getOrderById (req, res) {
        try{
            const data = await Orders.findById(req.params.id).exec()
            return res.json(data).status(302);
        }catch(err){
            res.status(404).send("Não foi possivel exibir o pedido, tente novamente!")
        }
    }
    async orderUpdate (req, res) {
        try{
            const data = await Orders.findByIdAndUpdate(req.params.id, { 
                pizza: req.body.pizza,
                drink: req.body.drink,
                idClient: req.body.idClient
            })
            return res.json(data).status(202);
        }catch(err){
            res.status(404).send("Não foi possivel atualizar as informações pedido, tente novamente!")
        }
    }
    async orderDelete (req, res) {
        try{
            const data = await Orders.findByIdAndDelete(req.params.id)
            return res.json(data);
        }catch(err){
            res.status(404).send("Não foi possivel deletar o pedido, tente novamente!")
        }
    }
}

module.exports = new OrdersController();