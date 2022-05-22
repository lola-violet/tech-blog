const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

User.hasMany(Blog);
Blog.belongsTo(User, {
    foreignKey: 'UserId'
});

User.hasMany(Comment);
Comment.belongsTo(User, {
    foreignKey: 'UserId'
});

Blog.hasMany(Comment);
Comment.belongsTo(Blog, {
    foreignKey: 'BlogId'
});


module.exports = {
    User:User,
    Blog:Blog,
    Comment:Comment,
};