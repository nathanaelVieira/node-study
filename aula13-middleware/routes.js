const express = require('express');
const route = express.Router();


const homerController = require('./src/controllers/homeController');


// route.use((req, res, next) => {
//     console.log("Time:", Date.now());
//     console.log("Type method:", req.method);
//     next();
// });


const requestHttp = (req, res, next) => {
    console.log(`Data: ${new Date().toISOString()}, Method: ${req.method},  URL: ${req.url}`);
    next();
};

route.use(requestHttp);

route.get('/', homerController.mainPage);
route.post('/', homerController.treatPost);

module.exports = route;
