const express = require('express');
const router = express.Router();
const models = require('../models');


// GET all favorites from favorites table
router.get('/', function(req, res, next) {
    models.Favorite.findAll({
        where: {
            UserId: req.user,
        },
        include: [
            models.User,
        ]
    })
});

module.exports = router;