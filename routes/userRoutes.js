const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Find all users
router.get("/", (req, res) => {
    User.findAll()
    .then(dbUsers => {
        res.json(dbUsers)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
})

// Find one user by ID
router.get("/:id", (req, res) => {
    User.findByPk(req.params.id)
    .then(dbUser => {
        res.json(dbUser)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
})

// Create new user
router.post("/", (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.json(newUser)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
})




module.exports = router;