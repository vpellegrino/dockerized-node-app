const mongoose = require("mongoose");

module.exports = (env) =>{
    const hostname = env === 'production' ? 'mongo' : 'localhost';
    const connection = `mongodb://${hostname}:27017/company-test`;
    return mongoose.connect(connection);
};