const homePath = require('../utils/path')

const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(homePath, 'views', 'shop.html'))
})

module.exports = router;