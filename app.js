const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const songRoutes = require('./routes/songs')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://Ins1eme:usumaf29@ds029901.mlab.com:29901/sound-manager', {
    useNewUrlParser: true
}).then(_ => {
        console.log('mongoDB connected')
    })
    
mongoose.set('useCreateIndex', true); 

app.use('/api', songRoutes)
    
module.exports = app