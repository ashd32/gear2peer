module.exports = function (sequelize, DataTypes) {
    const Item = sequelize.define("Item", {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        price: DataTypes.INTEGER,
        photoURL: DataTypes.STRING,
        reiID: DataTypes.STRING
    });
    return Item;
};