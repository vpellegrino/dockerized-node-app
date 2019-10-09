const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: {
        type: String
    },
    revenue: {
        type: Number
    },
    country: {
        type: String
    }
});

module.exports = mongoose.model("Company", companySchema);