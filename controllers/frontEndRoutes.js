const express = require('express');
const router = express.Router();
const { User, Blog, Comment } = require('../models');

// Show all blogs on home page
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            include: [User],
        });
        const hbsBlogs = blogs.map(blog => blog.get({ plain: true }));
        const loggedIn = req.session.user ? true : false;
        res.render("home", {
            blogs: hbsBlogs, 
            loggedIn, 
            username: req.session.user?.username,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "500 Internal Server Error" });
    }
});

// Login
router.get("/login", (req, res) => {
    if (req.session.user) {
        return res.redirect("/dashboard")
    }
    res.render("login")
});

router.get("/dashboard", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.id, {
        include: [Blog]
    }).then(userData => {
        console.log(userData);
        const hbsData = userData.get({ plain: true })
        console.log("=======")
        console.log(hbsData);
        hbsData.loggedIn = req.session.user ? true : false
        res.render("dashboard", hbsData)
    })
})


module.exports = router;