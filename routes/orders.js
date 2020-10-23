const Orders = require('../models/orders');
const router = require("express").Router();

router.post('/sendorder', (req, res) => {
    Orders.create({
        username: req.body.username,
        orders: req.body.orders
    }).then(data => {
        console.log('created new order')
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;