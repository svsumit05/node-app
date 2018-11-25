const path = require('path');
const express = require('express');

const rootPath = require('../util/path');
const adminData = require('./admin');

const shopRouter = express.Router();

shopRouter.get('/', (req, res, next) => {
    console.log(adminData.products);
    res.sendFile(path.join(rootPath , 'views', 'shop.html'))
});

module.exports = shopRouter;