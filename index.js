const express=require('express');
const port =9000;
const app=express();
const bodyParser = require('body-parser')

const db=require('./config/mongoose');
app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())

app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log('Error is found in the running server');
        return;
    }
    console.log(`Port is working on the port ${port}`);
})