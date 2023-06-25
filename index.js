const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require("mongoose");
const db=require("./config/database");
const router = require('./routes/router');
const passport=require("passport");
const passportStrategy=require("./config/passport");
const app=express();
const PORT=8000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(router);
app.listen(PORT,(err)=>{
    if(err){
        console.log(`server is giving an error:$(err)`);
    }else{
        console.log('server is successfully up and running');
    }
})