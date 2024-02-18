//import mongoose
const mongoose = require("mongoose");

//create Schema
const regiSchema = mongoose.Schema({
    userName :{type : String},
    mobile :{type : String},
    pass : {type : String},
    email : {type : String}
});

//create model
const regiModel = mongoose.model("user-data",regiSchema);


//export
module.exports = regiModel;