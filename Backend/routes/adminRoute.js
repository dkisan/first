const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/addproduct', (req, res, next) => {
    // res.send('<form action="/admin/addproduct" method="POST"><input type="text" name="prodName"><input type="number" name="prodSize"><button type="submit">Add Product</button></form>')
    res.sendFile(path.join(__dirname,'..','views','addproduct.html'))
})
router.post('/addproduct', (req, res, next) => {
    console.log(req.body)
    res.redirect('/admin/addproduct')
})

module.exports = router