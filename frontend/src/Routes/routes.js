import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import pages
import Home from '../pages/Index'
import Order from '../pages/order'
import DeliveredOrders from '../pages/deliveredOrders'
import RegisterOrder from '../pages/registerOrder'

export default function Routes(){

    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/order/:id" exact component={Order}/>
                <Route path="/orderDelivered" exact component={DeliveredOrders}/>
                <Route path="/register" exact component={RegisterOrder}/>
            </Switch>
        </Router>
    )
}