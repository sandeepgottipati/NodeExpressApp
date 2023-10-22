const homePath = require('../utils/path')

const path = require('path');

const express = require('express');

const router = express.Router();
const admin = require('./admin')
router.get('/', (req, res) => {
    console.log(admin.products);
    //res.sendFile(path.join(homePath, 'views', 'shop.html'))
    res.render('shop', { prods: admin.products, docTitle: 'shop' })
})

module.exports = router;