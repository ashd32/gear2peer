module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.INTEGER,
        showAddress: DataTypes.BOOLEAN,
        username: DataTypes.STRING,
        password: DataTypes.STRING
    });
    User.associate=function(models){
        User.hasMany(models.Product, {
            onDelete: 'cascade'
        })
    }
    return User;
};

