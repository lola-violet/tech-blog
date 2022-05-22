const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome")
});


const userRoutes = require('./userRoutes');
router.use("/api/users", userRoutes);

const blogRoutes = require('./blogRoutes');
router.use("/api/blogs", blogRoutes);

module.exports = router;