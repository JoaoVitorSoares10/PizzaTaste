const drink = require('../model/drink')

class drinkController {
    async register (req, res) {
        try{
            const data = await drink.create(req.body);
            return res.json(data).status(201);
        }catch(err){
            res.status(404).send("Não foi possivel cadastrar a bebida, tente novamente!")
        }
    }
    async list (req, res) {
        try{
            const data = await drink.find();
            return res.json(data);
        }catch(err){
            res.status(404).send("Não foi possivel exibir as bebidas, tente novamente!")
        }
    }
    async drinkDetails (req, res) {
        try{
            const data = await drink.findById(req.params.id).exec()
            return res.json(data).status(302);
        }catch(err){
            res.status(404).send("Não foi possivel exibir a bebida, tente novamente!")
        }
    }
}

module.exports = new drinkController();