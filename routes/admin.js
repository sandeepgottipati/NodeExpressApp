const homePath = require('../utils/path')

const path = require('path');

const express = require('express');

const router = express.Router();
const products = []
router.get('/add-product', (req, res) => {
    //res.sendFile(path.join(homePath, 'views', 'add-product.html'))
    res.render('add-product', { docTitle: "product" })
})

router.post('/add-product', (req, res) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

exports.router = router;
exports.products = products;