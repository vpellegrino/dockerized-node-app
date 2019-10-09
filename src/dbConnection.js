const mongoose = require("mongoose");

const connection = "mongodb://localhost:27017/company-test";

module.exports = () =>{
    return mongoose.connect(connection);
};