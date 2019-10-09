const Company = require("../models/Company.model");

const getAll = async () => {
    const companies = await Company.find();
    return companies;
};

const store = async (name, revenue, country) => {

    const company = new Company({ name, revenue, country });

    await company.save()
        .then(()=>{ console.log(`Company ${name} added!`); return "success"; })
        .catch((e)=>{ console.log(e); return "error"; });

};

module.exports = {getAll, store};