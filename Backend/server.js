const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const db = require('./src/database/config');
const routes = require('./src/routes/routes.js');

const port = process.env.PORT || 5000;
const app = express()

const database = () => {
    try{
        mongoose.Promise = global.Promise
        mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log('connected')
    }catch(err){
        console.log('connection error' + err)
    }
}

const server = () => {
    app.listen(port, ()=>{
        console.log('server running on port ' + port)
    })
}

const middlewares = () => {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
}

const router = () => {
    app.use(routes);
}

database()
middlewares()
router()
server()

