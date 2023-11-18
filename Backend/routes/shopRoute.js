const express = require('express')
const router = express.Router()
const path = require('path')

const contactController = require('../controllers/contactcontroller')

router.get('/contactus',contactController.getContactus)

router.post('/success',contactController.postSuccess)

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..','views', 'shop.html'))

})

module.exports = router