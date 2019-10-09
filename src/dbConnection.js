const mongoose = require("mongoose");

const connection = "mongodb://mongo:27017/company-test";

module.exports = () =>{
    return mongoose.connect(connection);
};