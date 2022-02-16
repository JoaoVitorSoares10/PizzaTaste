const express = require("express");
const Router = express.Router();
const OrderController = require("../app/controller/orderController");
const PizzaController = require('../app/controller/pizzaController');
const DrinkController = require('../app/controller/drinkController');
const ClientController = require('../app/controller/clientController')
const OrdersController = require('../app/controller/ordersController')

Router.get('/', OrderController.home);
Router.get('/order/:id', OrderController.order);
Router.get('/orderDelivered', OrderController.orderDelivered);
Router.post('/register', OrderController.register);
Router.put('/order/:id/update', OrderController.orderUpdate);
Router.put('/status/:id', OrderController.orderStatus);
Router.delete('/order/:id/delete', OrderController.orderDelete);

Router.get('/client', ClientController.getAllClients);
Router.get('/client/:id', ClientController.getClientById);
Router.post('/client/register', ClientController.register);
Router.put('/client/:id/update', ClientController.clientUpdate);
Router.delete('/client/:id/delete', ClientController.clientDelete);

Router.get('/orders', OrdersController.getAllOrders);
Router.get('/orders/:id', OrdersController.getOrderById);
Router.post('/orders/register', OrdersController.register);
Router.put('/orders/:id/update', OrdersController.orderUpdate);
Router.delete('/orders/:id/delete', OrdersController.orderDelete);

module.exports = Router;
