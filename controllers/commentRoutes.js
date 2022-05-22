const express = require('express');
const router = express.Router();
const {User, Blog, Comment} = require('../models/');

// Find all comments
router.get("/", (req, res) => {
    Comment.findAll({
        include: [User]
    })
    .then(dbComments => {
        res.json(dbComments);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});

// Find one comment by ID
router.get("/:id", (req, res) => {
    Comment.findByPk(req.params.id, {
        include: [User]
    })
    .then(dbComment => {
        res.json(dbComment);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});

// Create new comment
router.post("/", (req, res) => {
    Comment.create(req.body)
    .then(newComment => {
        res.json(newComment);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});

// Update existing comment by ID
router.put("/:id", (req, res) => {
    Comment.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(updatedComment => {
        res.json(updatedComment);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});

// Delete comment by ID
router.delete("/:id", (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deletedComment => {
        res.json(deletedComment);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});


module.exports = router;