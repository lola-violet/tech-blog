const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
        unique: true, 
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            len: [8]
        },
    },
},{
    sequelize
});

module.exports = User;