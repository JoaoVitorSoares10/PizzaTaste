const pizza = require('../model/pizza')

class pizzaController {
    async register (req, res) {
        try{
            const data = await pizza.create(req.body);
            return res.json(data).status(201);
        }catch(err){
            res.status(404).send("Não foi possivel cadastrar a pizza, tente novamente!")
        }
    }
    async list (req, res) {
        try{
            const data = await pizza.find();
            return res.json(data);
        }catch(err){
            res.status(404).send("Não foi possivel exibir as pizzas, tente novamente!")
        }
    }
    async pizzaDetails (req, res) {
        try{
            const data = await pizza.findById(req.params.id).exec()
            return res.json(data).status(302);
        }catch(err){
            res.status(404).send("Não foi possivel exibir a pizza, tente novamente!")
        }
    }
}

module.exports = new pizzaController();