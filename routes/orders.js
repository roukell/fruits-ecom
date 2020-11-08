const Orders = require('../models/orders');
const router = require("express").Router();

router.post('/sendorder', (req, res) => {
    console.log(JSON.stringify(req.body));
    Orders.create({
        username: req.body.username,
        orders: req.body.orders,
        date: Date()
    }).then(data => {
        console.log('created new order')
    })
    .catch(err => {
        console.log(err);
    })
})

router.get('/api/getOrders', (req, res) => {
    Orders.find({})
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err))
})

router.post('/api/getCurrentLoggedInCustomerOrderHistory', (req, res) => {
    Orders.find({
        username: req.body.username
    }, (err, data) => {
        if (err) throw err;
        res.json(data);
    }); 
})

module.exports = router;