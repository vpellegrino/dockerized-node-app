const express = require('express');
const bodyParser = require("body-parser");
const dbConnection = require("./dbConnection");
const companyDao = require('./api/companyDao');

const apiServer = express();
apiServer.use(bodyParser.urlencoded({ extended: false }));
apiServer.use(bodyParser.json());

const PORT = 8080;

apiServer.listen(PORT, () => {

    console.log(`API exposed on PORT: ${PORT}`);

    dbConnection().then(() => {
        console.log("Mongo DataBase connected!")
    }).catch(e => {
        console.log(e);
    });

});

apiServer.get("/", (req, res) => {

    res.json({"app": "A sample app"});

});

apiServer.get("/companies", async (req, res) => {

    await companyDao.getAll().then((result) => {
        console.log("Users: " + result);
        res.json(result);
    }).catch(e => {
        console.log(e);
        res.sendStatus(404);
    });

});

apiServer.post("/insert", async (req, res) => {

    const body = req.body || {};
    console.log(req.body);
    await companyDao.store(body.name, body.revenue, body.country).then(result => {
        console.log(result);
        res.send(result);
    }).catch(e => {
        console.log(e);
        res.sendStatus(500);
    });

});
