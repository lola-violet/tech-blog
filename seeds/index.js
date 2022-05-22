const sequelize = require("../config/connection")
const {User, Blog, Comment} = require("../models")

const users = [
    {
        username:"violet",
        password:"password"
    },
    {
        username:"wilson",
        password:"password1"
    },
    {
        username:"goose",
        password:"Password3"
    }
]

const blogs = [
    {
        title:"About Me",
        content:"Welcome to my blog. My name is Violet & I'm a siamese tortie mix.",
        UserId:1
    },
    {
        title:"Haircut",
        content:"My human gave me a haircut recently... She sucks.",
        UserId:1
    },
    {
        title:"I'm Wilson",
        content:"My name is Mr. Wilson & I'm Violet's cousin.",
        UserId:2
    }
]

const comments = [
    {
        content:"This is a comment",
        UserId: 1,
        BlogId: 1
    },
    {
        content: "This is another comment",
        UserId: 2,
        BlogId: 2
    },
    {
        content: "And another! I'm a comment.",
        UserId: 3,
        BlogId: 3
    }
]

const seedMe = async () => {
    try {
        await sequelize.sync({force:true});
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err) {
        console.log(err);
    };
};

seedMe()