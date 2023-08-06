const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Image = sequelize.define('image', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publicId: {
        type: DataTypes.STRING,
        allowNull: false
    }
    //ProductsId
});

module.exports = Image;