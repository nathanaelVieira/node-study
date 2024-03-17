const express = require('express');
const route = express.Router();

const homerController = require('./src/controllers/homeController');

route.get('/', homerController.mainPage);
route.post('/', homerController.treatPost);

module.exports = route;
