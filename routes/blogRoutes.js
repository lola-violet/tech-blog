const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Find all blogs
router.get("/", (req, res) => {
    Blog.findAll()
    .then(dbBlogs => {
        res.json(dbBlogs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});

// Find one blog by ID
router.get("/:id", (req, res) => {
    Blog.findByPk(req.params.id)
    .then(dbBlog => {
        res.json(dbBlog);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});

// Create new blog
router.post("/", (req, res) => {
    Blog.create(req.body)
    .then(newBlog => {
        res.json(newBlog);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});

// Update existing Blog by ID
router.put("/:id", (req, res) => {
    Blog.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(updatedBlog => {
        res.json(updatedBlog);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
});

// Delete Blog by ID
router.delete("/:id", (req, res) => {
    Blog.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deletedBlog => {
        res.json(deletedBlog);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error", err });
    })
})


module.exports = router;