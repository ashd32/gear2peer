module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        price: DataTypes.INTEGER,
        photoURL: DataTypes.STRING,
        reiID: DataTypes.STRING
    });
    return Product;
};