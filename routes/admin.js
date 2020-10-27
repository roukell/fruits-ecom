const Admin = require('../models/admin');
const passport = require('passport');
const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post('/admin/login', passport.authenticate('admin-local'), (req, res) => {
    Admin.findOne({
        username: req.body.username
    }, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const token = jwt.sign({ username: req.body.username }, 'secret');
        // console.log(token);
        res.json({
            token: token
        });
    })
});

router.get('/adminLogout', (req, res, next) => {
    if (req.session) {
        req.logout();
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                res.clearCookie('session-id');
                res.json({
                    message: 'You are successfully logged out!'
                });
            }
        });
    } else {
        var err = new Error('You are not logged in!');
        err.status = 403;
        next(err);
    }
});

// router.post('/adminsignup', (req, res, next) => {
//     Admin.register(new Admin({
//         username: req.body.username
//     }),
//         req.body.password, (err, user) => {
//             if (err) {
//                 console.log(err);
//                 res.statusCode = 500;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json({
//                     err: err
//                 });
//             } else {
//                 passport.authenticate('local')(req, res, () => {
//                     Admin.findOne({
//                         username: req.body.username
//                     }, (err, person) => {
//                         res.statusCode = 200;
//                         res.setHeader('Content-Type', 'application/json');
//                         res.json({
//                             success: true,
//                             status: 'Registration Successful!',
//                         });
//                     });
//                 })
//             }
//         })
// });

module.exports = router;