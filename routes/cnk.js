var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cnk = require('../models/Cnk.js');

// router.get('/', function(req, res, next) {
//     res.send('Express REST API');
// });
/* GET ALL cnks */
router.get('/', function(req, res, next) {
    Cnk.find(function(err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE Cnk BY ID */
router.get('/:id', function(req, res, next) {
    Cnk.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE Cnk */
router.post('/', function(req, res, next) {
    Cnk.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE Cnk */
router.put('/:id', function(req, res, next) {
    Cnk.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE Cnk */
router.delete('/:id', function(req, res, next) {
    Cnk.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;