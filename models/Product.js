module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
        UserId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        price: DataTypes.INTEGER,
        photoURL: DataTypes.STRING,
        reiID: DataTypes.STRING,
        isAvailable: DataTypes.BOOLEAN
    });
    Product.associate=function(models){
        Product.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Product;
};
