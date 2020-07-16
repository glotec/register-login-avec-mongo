const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/rwandastartupdb',
    { useNewUrlParser: true }, (err) =>{
        if(!err) console.log('MongoDb Connection Succeded')
        else console.log('Error in DB connection: ' + err)
    });