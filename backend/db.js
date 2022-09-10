const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%Compass&directConnection=true&ssl=false"

 const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to Mongo Successfully");
    })
 }

 module.exports = connectToMongo;