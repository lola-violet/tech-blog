const express = require('express');
const router = express.Router();
const {User, Blog, Comment} = require('../models/');

// Find all users
router.get("/", (req, res) => {
    User.findAll()
    .then(dbUsers => {
        res.json(dbUsers);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});

// Find one user by ID
router.get("/:id", (req, res) => {
    User.findByPk(req.params.id)
    .then(dbUser => {
        res.json(dbUser);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});

// Create new user
router.post("/", (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.json(newUser);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});

// Update existing user by ID
router.put("/:id", (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(updatedUser => {
        res.json(updatedUser);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});

// Delete user by ID
router.delete("/:id", (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deletedUser => {
        res.json(deletedUser);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});


module.exports = router;