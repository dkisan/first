const express = require('express')
const router = express.Router()

router.get('/addproduct', (req, res, next) => {
    res.send('<form action="/admin/addproduct" method="POST"><input type="text" name="prodName"><input type="number" name="prodSize"><button type="submit">Add Product</button></form>')
})
router.post('/addproduct', (req, res, next) => {
    console.log(req.body)
    res.redirect('/admin/addproduct')
})

module.exports = router